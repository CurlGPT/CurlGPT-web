import { FC } from "react";

interface NumbersProps {
    stat: {
        key: number;
        svg: string;
        bigNumber: string;
        context: string;
    };
}

const Numbers: FC<NumbersProps> = ({ stat }) => {
    const { bigNumber, context, svg } = stat;
    return (
        <div className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-sm border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700 w-64">
            <dt className="mb-2 h-12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    className="w-10 h-10"
                >
                    <path fillRule="evenodd" clipRule="evenodd" d={svg} />
                </svg>
            </dt>
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
