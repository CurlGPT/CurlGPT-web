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
                count: null,
            },
            { status: 401 }
        );

    token = token.split(" ")[1];
    const decodedToken = jwt.decode(token);
    if (!decodedToken)
        return NextResponse.json(
            {
                error: "User not found",
                count: null,
            },
            { status: 403 }
        );

    const { email, name } = decodedToken as JwtPayload;
    const currentUser = await db.user.findFirst({ where: { email, name } });

    if (!currentUser)
        return NextResponse.json(
            {
                error: "User not found",
                count: null,
            },
            { status: 403 }
        );

    const count = await db.usage.count({
        where: {
            userId: currentUser.id,
        },
    });

    return NextResponse.json({ count, error: null });
}
