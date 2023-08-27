import { FC } from "react";

interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="mx-auto max-w-screen-sm md:max-w-screen-md text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-950 dark:text-white">
                {title}
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                {subtitle}
            </p>
        </div>
    );
};

export default Header;
