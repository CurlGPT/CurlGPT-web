import { redirect } from "next/navigation";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FC } from "react";
import SignInWithGoogle from "@/components/ui/SignInWithGoogle";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
    const session = await getServerSession(authOptions);
    if (session) {
        return redirect("/");
    }
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-white dark:bg-gray-950">
            <div className="mx-auto flex w-[350px] flex-col justify-center space-y-6 ">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Welcome to CurlGPT!
                    </h1>
                    <p className="px-8 pb-1 text-center text-sm text-muted-foreground">
                        Sign In with your Google Account
                    </p>
                </div>
                <SignInWithGoogle />
            </div>
        </div>
    );
};
export default page;
