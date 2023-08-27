import { FC } from "react";
import Step from "./ui/Step";
import Header from "./ui/Header";

const steps = [
    {
        key: 1,
        imageLink: "/install.svg",
        title: "Install the CLI Tool",
    },
    {
        key: 2,
        imageLink: "/signin.svg",
        title: "Set your OpenAI's API Key",
    },
    {
        key: 3,
        imageLink: "/prompt.svg",
        title: "Enter the prompt",
    },
];
const HowItWorks: FC = () => {
    return (
        <section className="bg-white dark:bg-gray-950 p-32">
            <div className=" px-4 mx-auto max-w-screen-xl lg:px-6">
                <Header
                    title={"How it works"}
                    subtitle={
                        "Effortlessly generate accurate commands with CurlGPT's intelligent AI-driven process."
                    }
                />
                <div className="grid gap-8 justify-items-center lg:grid-cols-3 mx-10 justify-center">
                    {steps.map((step) => (
                        <Step key={step.key} step={step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
