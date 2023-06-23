import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
    return (
        <footer className="p-4 bg-gray-100 sm:p-6 dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="mr-3 h-8"
                                alt="CurlGPT Logo"
                                width="100"
                                height="100"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                CurlGPT
                            </span>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <ul className="sm:flex sm:flex-row text-gray-600 dark:text-gray-400 ml-10">
                                <li className="mb-4 sm:mr-10">
                                    <Link
                                        href="https://github.com/CurlGPT/CurlGPT"
                                        className="hover:underline "
                                    >
                                        Github
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/documentation"
                                        className="hover:underline"
                                    >
                                        Documentation
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <Link href="/" className="hover:underline">
                            CurlGPT™
                        </Link>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
