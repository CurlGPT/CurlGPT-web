import { FC } from "react";
import Numbers from "./Numbers";

interface StatsProps {}

const stats = [
    {
        key: 1,
        bigNumber: "1K+",
        context: "Downloads per month",
    },
    {
        key: 2,
        bigNumber: "5K+",
        context: "Prompts per month",
    },
    {
        key: 3,
        bigNumber: "100%",
        context: "Delighted consumers",
    },
];
const Stats: FC<StatsProps> = ({}) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-lg mb-8">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Transformation by the numbers
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Join the thousands of developers and engineers who trust
                        CurlGPT
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-900">
                    <div className="max-w-xs sm:max-w-screen-xl px-4 pt-8 mx-auto text-center">
                        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                            {stats.map((stat) => (
                                <Numbers key={stat.key} stat={stat} />
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
