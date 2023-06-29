import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { db } from "@/utils/db";
import { nanoid } from "nanoid";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
    const header = headers();
    let token = header.get("Authorization");

    if (!token)
        return NextResponse.json(
            {
                error: "Unauthorized",
                createdApiKey: null,
            },
            { status: 401 }
        );

    token = token.split(" ")[1];
    const decodedToken = jwt.decode(token);
    if (!decodedToken)
        return NextResponse.json(
            {
                error: "User not found",
                createdApiKey: null,
            },
            { status: 403 }
        );
    const { email, name } = decodedToken as JwtPayload;

    const currentUser = await db.user.findFirst({ where: { email, name } });

    if (!currentUser)
        return NextResponse.json(
            {
                error: "User not found",
                createdApiKey: null,
            },
            { status: 403 }
        );

    const existingApiKey = await db.apiKey.findFirst({
        where: { userId: currentUser.id, enabled: true },
    });
    if (existingApiKey)
        return NextResponse.json(
            { error: null, createdApiKey: existingApiKey },
            { status: 200 }
        );
    const createdApiKey = await db.apiKey.create({
        data: {
            userId: currentUser.id,
            key: "la-" + nanoid(48),
        },
    });

    return NextResponse.json({ error: null, createdApiKey }, { status: 200 });
}
