import Link from "next/link";
import { FC } from "react";

interface PriceCardProps {
    pricing: {
        key: number;
        title: string;
        subtitle: string;
        amount: string;
        period?: string;
        subscription: string;
        limit: string;
        model: string;
    };
}

const PriceCard: FC<PriceCardProps> = ({ pricing }) => {
    const { title, subtitle, amount, period, subscription, limit, model } =
        pricing;
    return (
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-950 bg-gray-100 rounded-lg border border-gray-200 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="font-light h-10 text-gray-500 sm:text-lg dark:text-gray-400">
                {subtitle}
            </p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{amount}</span>
                <span className="text-gray-500 dark:text-gray-400">
                    {period}
                </span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span>{subscription}</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span>{limit} Prompts Limit</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span>
                        AI Model: <span className="font-semibold">{model}</span>
                    </span>
                </li>
            </ul>
            <Link
                href="/"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
                Get started
            </Link>
        </div>
    );
};

export default PriceCard;
