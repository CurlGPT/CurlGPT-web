import Code from "@/components/ui/Code";
import { FC } from "react";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
        <section className="bg-white dark:bg-gray-950 p-16">
            <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-12">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-950 dark:text-white text-center">
                    Documentation
                </h2>
                <p className="text-gray-700 sm:text-lg dark:text-gray-400 ">
                    CurlGPT is a command-line tool that brings the power of
                    OpenAI&apos;s ChatGPT to your favorite terminal. It allows
                    you to type prompts, and the command line will output the
                    proper command for you. With CurlGPT, you can easily
                    generate accurate commands based on your prompts and
                    simplify your command-line workflows.
                </p>
                <h2 className="mb-4 mt-10 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-950 dark:text-white">
                    Installation
                </h2>
                <p className="text-gray-700 sm:text-lg dark:text-gray-400 ">
                    Before installing CurlGPT, ensure that you have Node.js
                    installed on your system. Then, run the following command to
                    install CurlGPT globally:
                </p>
                <Code code={"npm install -g curlgpt"} />
                <h2 className="mb-4 mt-10 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-950 dark:text-white">
                    Usage
                </h2>
                <p className="text-gray-700 sm:text-lg dark:text-gray-400 ">
                    To use CurlGPT effectively, follow the steps below:
                </p>
                <ol className="list-decimal list-inside">
                    <li className="text-gray-700 sm:text-lg dark:text-gray-400 my-1">
                        Obtain your{" "}
                        <a
                            href="https://platform.openai.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b bottom-1 text-blue-800 border-blue-800 dark:border-white dark:text-white "
                        >
                            OpenAI&apos;s
                        </a>{" "}
                        API key.
                    </li>
                    <li className="text-gray-700 sm:text-lg dark:text-gray-400 my-1">
                        Set your OpenAI&apos;s API key using the --set-apiKey
                        option:
                    </li>
                    <Code code={"curlgpt --set-apiKey <apiKey>"} />
                    <li className="text-gray-700 sm:text-lg dark:text-gray-400 my-1">
                        Test CurlGPT by providing a prompt:
                    </li>
                    <Code
                        code={
                            "curlgpt how to run a PostgreSQL container in local"
                        }
                    />
                    <p className="text-gray-700 sm:text-lg dark:text-gray-400">
                        The tool will return an appropriate response based on
                        the provided prompt, giving you the corresponding
                        command.
                    </p>
                    <li className="text-gray-700 sm:text-lg dark:text-gray-400 my-1">
                        Explore additional options and commands using the
                        built-in help:
                    </li>
                    <Code code={"curlgpt --help"} />
                </ol>
            </div>
        </section>
    );
};

export default page;
