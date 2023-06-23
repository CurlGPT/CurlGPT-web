import Image from "next/image";
import { FC } from "react";

interface StepProps {
    step: {
        key: number;
        imageLink: string;
        title: string;
    };
}

const Step: FC<StepProps> = ({ step }) => {
    const { imageLink, title } = step;
    return (
        <article className="p-6 bg-gray-100 rounded-lg border border-gray-200 w-80 lg:w-72 shadow-md dark:bg-gray-900 dark:border-gray-700">
            <div className="flex flex-col justify-center item-center">
                <div className="mb-4 w-52 self-center h-52 sm:w-52">
                    <Image
                        src={imageLink}
                        alt="sign in"
                        width="200"
                        height="200"
                    />
                </div>
                <h2 className="mb-2 text-sm md:text-lg self-center font-bold tracking-tight text-gray-950 dark:text-white">
                    <p>{title}</p>
                </h2>
            </div>
        </article>
    );
};

export default Step;
