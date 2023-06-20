import { FC } from "react";
import Step from "./Step";
import Header from "./Header";

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
const HowItWorks: FC = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
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
