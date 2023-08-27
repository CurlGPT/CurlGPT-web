import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
    return (
        <section className="bg-white dark:bg-gray-950 pt-16">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-950 md:text-5xl lg:text-6xl dark:text-white">
                    ChatGPT in your favorite terminal
                </h1>
                <p className="mb-8 leading-8 lg:leading-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Effortlessly generate accurate commands with CurlGPT, the
                    command-line tool that harnesses the capabilities of
                    OpenAI&apos;s ChatGPT. Simplify your workflow and boost
                    productivity. Get started now!
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link
                        target="_blank"
                        href="https://www.npmjs.com/package/curlgpt"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-950 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="mr-2 -ml-1 w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>
                        Install
                    </Link>
                </div>
                <div className="px-4 mx-auto text-center max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl lg:px-36">
                    <Image
                        priority
                        src={"/terminal1.png"}
                        height="791"
                        alt="CurlGPT"
                        width="1934"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
