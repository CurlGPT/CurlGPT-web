import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { db } from "@/utils/db";

export async function GET(request: NextRequest) {
    const header = headers();
    let token = header.get("Authorization");

    if (!token)
        return NextResponse.json(
            {
                error: "Unauthorized",
                usage: null,
            },
            { status: 401 }
        );

    token = token.split(" ")[1];
    const decodedToken = jwt.decode(token);
    if (!decodedToken)
        return NextResponse.json(
            {
                error: "User not found",
                usage: null,
            },
            { status: 403 }
        );

    const { email, name } = decodedToken as JwtPayload;
    const currentUser = await db.user.findFirst({ where: { email, name } });

    if (!currentUser)
        return NextResponse.json(
            {
                error: "User not found",
                usage: null,
            },
            { status: 403 }
        );

    const { searchParams } = new URL(request.url);
    let startDate: string | Date | null = searchParams.get("start_date");
    let endDate: string | Date | null = searchParams.get("end_date");

    if (!startDate && !endDate) {
        return NextResponse.json(
            {
                error: "Start and End dates are required",
                usage: null,
            },
            { status: 403 }
        );
    } else if (!startDate) {
        return NextResponse.json(
            {
                error: "Start date is required",
                usage: null,
            },
            { status: 403 }
        );
    } else if (!endDate) {
        return NextResponse.json(
            {
                error: "End date is required",
                usage: null,
            },
            { status: 403 }
        );
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(startDate)) {
        return NextResponse.json(
            {
                error: "Start date is invalid",
                usage: null,
            },
            { status: 403 }
        );
    } else if (!dateRegex.test(endDate)) {
        return NextResponse.json(
            {
                error: "Start and End dates are invalid",
                usage: null,
            },
            { status: 403 }
        );
    }

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    if (startDate > endDate) {
        return NextResponse.json(
            {
                error: "Start and End date is invalid",
                usage: null,
            },
            { status: 403 }
        );
    }

    const usage = await db.usage.findMany({
        where: {
            date: {
                lte: endDate,
                gte: startDate,
            },
            userId: currentUser.id,
        },
    });

    const getDateFormatted = (dateString: string): string => {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const month = monthNames[date.getMonth()];
        return `${day} ${month}`;
    };

    const getPromptCounts = (data: any[]): Record<string, number> => {
        const promptCounts: Record<string, number> = {};

        const currentYear = (startDate! as Date).getFullYear();
        const currentMonth = (startDate! as Date).getMonth();
        const daysInMonth = new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            const formattedDate = `${getDateFormatted(
                new Date(currentYear, currentMonth, i).toISOString()
            )}`;
            promptCounts[formattedDate] = 0;
        }

        for (const item of data) {
            const date = getDateFormatted(item.date);
            if (promptCounts[date]) promptCounts[date]++;
            else promptCounts[date] = 1;
        }

        return promptCounts;
    };

    const promptCounts = getPromptCounts(usage);

    return NextResponse.json({ usage: promptCounts, error: null });
}
