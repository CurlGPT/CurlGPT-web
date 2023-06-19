import { FC } from "react";

interface NumbersProps {
    stat: {
        key: number;
        bigNumber: string;
        context: string;
    };
}

const Numbers: FC<NumbersProps> = ({ stat }) => {
    const { bigNumber, context } = stat;
    return (
        <div className="flex flex-col items-center justify-center p-10 bg-white rounded-sm border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                {bigNumber}
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
                {context}
            </dd>
        </div>
    );
};

export default Numbers;
