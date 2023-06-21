"use client";

import { FC, useState } from "react";

interface CodeProps {
    code: string;
}

const Code: FC<CodeProps> = ({ code }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    };

    return (
        <>
            <div className="mt-4 flex items-center justify-between py-2 px-3 dark:bg-gray-800 bg-gray-200 rounded-t-lg">
                <span className="text-xs font-medium dark:text-primary-200 text-primary-800">
                    shell
                </span>
                <button
                    onClick={handleCopyClick}
                    className="dark:text-primary-200 text-primary-800 dark:hover:text-primary-400 hover:text-primary-600 text-xs"
                >
                    {isCopied ? (
                        <span>Copied!</span>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <pre
                className="rounded-b-lg mb-4 px-3 py-4 text-sm dark:bg-gray-950 bg-gray-300 dark:text-white"
                lang="shell"
            >
                <code>{code}</code>
            </pre>
        </>
    );
};

export default Code;
