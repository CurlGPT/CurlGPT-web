import { db } from "@/utils/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

export async function POST(request: NextRequest) {
    const header = headers();
    const apikey = header.get("apikey");
    const { prompt } = await request.json();
    try {
        if (!apikey) {
            return NextResponse.json(
                {
                    error: "Unauthorized",
                },
                { status: 401 }
            );
        }
        const key = await db.apiKey.findFirst({ where: { key: apikey } });

        if (!key || !key.enabled) {
            return NextResponse.json(
                {
                    error: "Invalid API Key.",
                },
                { status: 401 }
            );
        }

        await db.usage.create({
            data: {
                userId: key.userId,
                apikey: key.key,
            },
        });

        try {
            const openaiApiKey = process.env.OPENAI_API_KEY;

            const configuration = new Configuration({ apiKey: openaiApiKey });

            const openai = new OpenAIApi(configuration);

            const command = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: `Topic: command line tool. Length: 1 line. Task: generate shell command on ${prompt}`,
                    },
                ],
            });
            if (command.data.choices[0]?.message != null) {
                return NextResponse.json(
                    {
                        error: null,
                        command: command.data.choices[0].message.content,
                    },
                    { status: 200 }
                );
            }
        } catch (error: any) {
            console.log("====================================");
            console.log("Error:", error.message);
            console.log("====================================");
            return NextResponse.json(
                { error: "Internal Server Error", command: null },
                { status: 501 }
            );
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message, command: null });
    }
}
