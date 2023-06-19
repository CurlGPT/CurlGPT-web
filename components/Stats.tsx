import { FC } from "react";

interface StatsProps {}

const Stats: FC<StatsProps> = ({}) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-lg mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Transformation by the numbers
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Join the thousands of developers and engineers who trust
                        CurlGPT
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-900">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                                    1K+
                                </dt>
                                <dd className="font-light text-gray-500 dark:text-gray-400">
                                    Downloads per month
                                </dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                                    5K+
                                </dt>
                                <dd className="font-light text-gray-500 dark:text-gray-400">
                                    Prompts per month
                                </dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                                    100%
                                </dt>
                                <dd className="font-light text-gray-500 dark:text-gray-400">
                                    Delighted consumers
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
