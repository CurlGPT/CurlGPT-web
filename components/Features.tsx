import { FC } from "react";

import SingleFeature from "@/components/SingleFeature";
import Header from "@/components/ui/Header";

const features = [
    {
        key: 1,
        svg: "M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z",
        title: "Generate Accurate Commands",
        body: "CurlGPT leverages OpenAI's ChatGPT to provide precise and relevant commands based on the prompts you enter.",
    },
    {
        key: 2,
        svg: "M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z",
        title: "Auto Copy to Clipboard",
        body: "Save time and effort by automatically copying the outputted command to your clipboard with a single command.",
    },
    {
        key: 3,
        svg: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z",
        title: "Easy-to-Use Command-Line Interface",
        body: "CurlGPT offers a user-friendly command-line interface, making it intuitive and accessible for both beginner and advanced users.",
    },
];
const Features: FC = () => {
    return (
        <section id="features" className="bg-white dark:bg-gray-950 pt-32">
            <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                <Header
                    title={"CurlGPT comes with powerful features"}
                    subtitle={
                        "Experience the Versatility and Efficiency of Our CLI Tool."
                    }
                />
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {features.map((feature) => (
                        <SingleFeature key={feature.key} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
