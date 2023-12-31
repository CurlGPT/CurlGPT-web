import { FC } from "react";
import Numbers from "./ui/Numbers";
import Header from "./ui/Header";

const stats = [
    {
        key: 1,
        svg: "M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z",
        bigNumber: "1K+",
        context: "Downloads per month",
    },
    {
        key: 2,
        svg: "M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z",
        bigNumber: "5K+",
        context: "Prompts per month",
    },
    {
        key: 3,
        svg: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z",
        bigNumber: "100%",
        context: "Delighted consumers",
    },
];
const Stats: FC = () => {
    return (
        <section className="bg-white dark:bg-gray-950 pt-32">
            <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                <Header
                    title={"Transformation by the numbers"}
                    subtitle={
                        "Join the thousands of developers and engineers who trust CurlGPT."
                    }
                />
                <div className="bg-white dark:bg-gray-950">
                    <div className="max-w-xs md:max-w-screen-xl px-4 mx-auto text-center">
                        <dl className="grid max-w-screen-md gap-20 mx-auto text-gray-950 md:grid-cols-3 dark:text-white">
                            {stats.map((stat) => (
                                <Numbers key={stat.key} stat={stat} />
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
