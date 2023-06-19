import Image from "next/image";
import { FC } from "react";

interface HowItWorksProps {}

const HowItWorks: FC<HowItWorksProps> = ({}) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm md:max-w-screen-md text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        How it works
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Effortlessly generate accurate commands with
                        CurlGPT&apos;s intelligent AI-driven process.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3 mx-10 justify-center">
                    <article className="p-6 bg-white rounded-lg border border-gray-200 w-80 lg:w-96 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col justify-center item-center">
                            <div className="mb-4 w-28 h-28 self-center sm:h-52 sm:w-52">
                                <Image
                                    src={"/signin.jpg"}
                                    alt="sign in"
                                    width="200"
                                    height="200"
                                />
                            </div>
                            <h2 className="mb-2 text-sm md:text-lg self-center font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Sign Up and get the API Key</a>
                            </h2>
                        </div>
                    </article>
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md w-80 lg:w-96  dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col justify-center item-center">
                            <div className="mb-4 w-28 h-28 self-center sm:h-52 sm:w-52">
                                <Image
                                    src={"/install.jpg"}
                                    alt="install"
                                    width="200"
                                    height="200"
                                />
                            </div>
                            <h2 className="mb-2 text-lg self-center font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Install the CLI Tool</a>
                            </h2>
                        </div>
                    </article>
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md w-80 lg:w-96  dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col justify-center item-center">
                            <div className="mb-4 w-28 h-28 self-center sm:h-52 sm:w-52">
                                <Image
                                    src={"/prompt.jpg"}
                                    alt="prompt"
                                    width="200"
                                    height="200"
                                />
                            </div>
                            <h2 className="mb-2 text-lg self-center font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Enter the prompt</a>
                            </h2>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
