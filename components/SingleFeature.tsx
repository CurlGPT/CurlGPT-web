import { FC } from "react";

interface SingleFeatureProps {
    feature: {
        key: number;
        svg: string;
        title: string;
        body: string;
    };
}

const SingleFeature: FC<SingleFeatureProps> = ({ feature }) => {
    const { svg, title, body } = feature;
    return (
        <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-50 dark:hover:bg-primary-400">
                <svg
                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d={svg} clipRule="evenodd" />
                </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{body}</p>
        </div>
    );
};

export default SingleFeature;
