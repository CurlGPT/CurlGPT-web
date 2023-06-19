import Image from "next/image";
import { FC } from "react";
import Step from "./Step";

interface HowItWorksProps {}
const steps = [
    {
        key: 1,
        imageLink: "/signin.jpg",
        title: "Sign In and get the API Key",
    },
    {
        key: 2,
        imageLink: "/install.jpg",
        title: "Install the CLI Tool",
    },
    {
        key: 3,
        imageLink: "/prompt.jpg",
        title: "Enter the prompt",
    },
];
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
                    {steps.map((step) => (
                        <Step key={step.key} step={step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
