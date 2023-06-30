import { getServerSession } from "next-auth";
import { FC } from "react";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Copy from "@/components/ui/Copy";
import { authOptions } from "@/utils/auth";
import { createApiKey } from "@/app/helper/create-api-key";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/");
    }
    let apiKey;
    try {
        apiKey = await createApiKey();
    } catch (error) {
        console.error(error);
    }

    return (
        <section id="pricing" className="bg-white dark:bg-gray-950 pt-32 pb-12">
            <Header
                title={`Welcome, ${session?.user.name || "User"}!`}
                subtitle=""
            />
            <div className="flex justify-center items-center gap-4">
                <p>Your API Key is</p>
                <div className="relative w-96">
                    <input
                        type="text"
                        id="apiKey"
                        value={apiKey}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your API Key"
                        disabled
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <Copy text={apiKey || ""} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
