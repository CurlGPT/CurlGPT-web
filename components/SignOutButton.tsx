"use client";

import { FC, useState } from "react";
import { signOut } from "next-auth/react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signUserOut = async () => {
        setIsLoading(true);
        try {
            await signOut();
        } catch (error) {
            console.log({
                title: "Error signing out",
                message: "Please try again later",
                type: "error",
            });
        }
    };

    return (
        <button
            onClick={signUserOut}
            disabled={isLoading}
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 mr-4 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
            Sign Out
        </button>
    );
};

export default SignOutButton;
