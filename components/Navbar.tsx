import { FC } from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";

import { authOptions } from "@/utils/auth";
import Nav from "./Nav";

const Navbar: FC = async () => {
    const session = await getServerSession(authOptions);
    return (
        <header>
            <nav className="bg-white/30 dark:bg-gray-900/30 border-gray-200 dark:border-gray-600 px-4 md:px-6 py-2.5 fixed w-full z-10 top-0  backdrop-filter backdrop-blur-lg border-b">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        href="/"
                        className="flex items-center text-primary-900 dark:text-white xl:mr-60"
                    >
                        <svg
                            className="mr-1 w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 524 477"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                transform="translate(0.000000,477.000000) scale(0.100000,-0.100000)"
                                stroke="none"
                            >
                                <path d="M2570 4244 c-14 -2 -66 -11 -116 -19 -446 -72 -898 -344 -1174 -705 -218 -285 -356 -625 -391 -963 -18 -173 -7 -425 26 -582 83 -398 266 -732 548 -1001 509 -487 1231 -656 1897 -442 543 174 999 606 1195 1133 95 255 132 488 121 765 -15 406 -150 775 -400 1093 -78 101 -265 283 -366 358 -167 125 -392 236 -591 294 -193 56 -269 66 -504 70 -121 2 -231 2 -245 -1z m452 -109 c515 -71 969 -356 1261 -793 360 -538 396 -1273 90 -1842 -317 -590 -931 -960 -1593 -960 -596 0 -1166 305 -1497 800 -202 303 -303 638 -303 1007 1 480 169 901 500 1246 288 301 648 486 1050 542 134 18 358 18 492 0z" />
                                <path d="M2560 4059 c-685 -88 -1252 -579 -1439 -1247 -50 -176 -64 -309 -58 -522 6 -207 23 -308 81 -484 198 -599 677 -1022 1311 -1158 97 -20 136 -23 330 -23 236 1 324 13 507 70 597 187 1055 693 1177 1300 147 727 -175 1455 -812 1839 -197 119 -424 195 -667 225 -97 13 -335 12 -430 0z m1049 -810 c20 -11 48 -36 61 -56 l25 -37 0 -812 c0 -805 0 -813 -21 -840 -29 -40 -65 -64 -110 -74 -56 -13 -1517 -12 -1574 1 -51 12 -96 49 -116 96 -12 27 -14 174 -14 824 l0 792 25 42 c16 28 39 50 67 64 43 21 49 21 832 21 777 0 789 0 825 -21z" />
                                <path d="M2030 2940 l0 -160 750 0 750 0 0 160 0 160 -750 0 -750 0 0 -160z m970 5 l0 -55 -60 0 -60 0 0 55 0 55 60 0 60 0 0 -55z m210 0 l0 -55 -55 0 -55 0 0 55 0 55 55 0 55 0 0 -55z m220 0 l0 -55 -60 0 -60 0 0 48 c0 27 3 52 7 55 3 4 30 7 60 7 l53 0 0 -55z" />
                                <path d="M2030 2130 l0 -540 750 0 750 0 0 540 0 540 -750 0 -750 0 0 -540z m293 324 c48 -50 87 -99 87 -109 0 -18 -166 -195 -184 -195 -13 0 -76 61 -76 74 0 6 26 36 57 68 l57 58 -59 60 -59 60 39 40 c22 22 42 39 45 38 3 -2 45 -44 93 -94z m266 -321 l92 -6 -3 -51 -3 -51 -137 -3 -138 -3 0 54 c0 30 3 57 7 60 8 9 65 9 182 0z" />
                            </g>
                        </svg>
                        <p className="font-monaco text-2xl font-black">
                            CurlGPT
                        </p>
                    </Link>
                    <Nav session={session} />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
