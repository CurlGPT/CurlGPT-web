import { FC } from "react";
import Copy from "./ui/Copy";

interface CodeProps {
    code: string;
}

const Code: FC<CodeProps> = ({ code }) => {
    return (
        <div className="border-[#1d283a] border my-4 rounded-lg">
            <div className="flex items-center justify-between py-2 px-3 bg-gray-900 rounded-t-lg">
                <span className="text-xs font-medium text-primary-200">
                    shell
                </span>
                <Copy text={code} />
            </div>
            <pre
                className="rounded-b-lg px-3 py-4 text-sm  bg-black text-white whitespace-pre-wrap"
                lang="shell"
            >
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default Code;
