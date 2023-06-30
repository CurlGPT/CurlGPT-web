import Header from "@/components/Header";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { FC } from "react";
import { createApiKey } from "@/app/helper/create-api-key";
import { redirect } from "next/navigation";

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
            <p>{`Your API Key is ${apiKey}`}</p>
        </section>
    );
};

export default page;
