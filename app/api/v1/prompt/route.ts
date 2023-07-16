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
                { status: 403 }
            );
        }

        try {
            const openaiApiKey = process.env.OPENAI_API_KEY;

            const configuration = new Configuration({ apiKey: openaiApiKey });

            const openai = new OpenAIApi(configuration);

            const command = await openai.createChatCompletion({
                model: "gpt-3.5-turbo-0613",
                messages: [
                    {
                        role: "user",
                        content: `Topic: command line tool. Length: 1 line. Task: Give only the command without description for ${prompt}`,
                    },
                ],
            });
            if (command.data.choices[0]?.message != null) {
                await db.usage.create({
                    data: {
                        userId: key.userId,
                        apikey: key.key,
                        promptToken: command.data.usage?.prompt_tokens,
                        completionToken: command.data.usage?.completion_tokens,
                        totalToken: command.data.usage?.total_tokens,
                    },
                });
                command.data.usage?.completion_tokens;
                return NextResponse.json(
                    {
                        error: null,
                        data: {
                            command: command.data.choices[0].message.content,
                            version: process.env.CLI_VERSION,
                        },
                    },
                    { status: 200 }
                );
            }
        } catch (error: any) {
            console.log("====================================");
            console.log("Error:", error.message);
            console.log("Error:", error);
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
