"use client";

import Link from "next/link";
import { FC, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { Session } from "next-auth";
import Image from "next/image";

interface NavProps {
    session: Session | null;
}

const Nav: FC<NavProps> = ({ session }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="flex md:order-2">
                <ThemeToggle />
                {session ? (
                    <>
                        <SignOutButton />
                        <Image
                            onClick={() => {
                                setIsOpen((prev) => !prev);
                            }}
                            width={40}
                            height={40}
                            className="w-10 h-10 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
                            src={
                                session.user.image ||
                                "https://cdn-icons-png.flaticon.com/512/6915/6915987.png"
                            }
                            alt="Bordered avatar"
                        />{" "}
                    </>
                ) : (
                    <>
                        <SignInButton />
                        <button
                            onClick={() => {
                                setIsOpen((prev) => !prev);
                            }}
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </>
                )}
            </div>
            <div
                className={` ${
                    isOpen ? "" : "hidden"
                } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
                id="navbar-sticky"
            >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
                    <li>
                        <Link
                            href="/documentation"
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Documentation
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#features"
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/pricing"
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#contact"
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Nav;
