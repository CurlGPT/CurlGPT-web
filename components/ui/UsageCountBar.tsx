import { getUsageCount } from "@/app/helper/get-usage-count";
import { FC, useEffect, useState } from "react";

interface UsageCountBarProps {}

const UsageCountBar: FC<UsageCountBarProps> = ({}) => {
    const [count, setCount] = useState(0);
    const [progressWidth, setProgressWidth] = useState(1);
    useEffect(() => {
        const fetchCount = async () => {
            let count;
            try {
                count = await getUsageCount();
            } catch (error: any) {
                console.error(error);
            }
            setCount(count);
            const percentage = (count / 500) * 100;
            setProgressWidth(percentage > 1 ? percentage : 1);
        };
        fetchCount();
    }, []);
    return (
        <>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                    Usage
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                    {count} / 500
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className={`bg-blue-600 h-2.5 rounded-full`}
                    style={{ width: `${progressWidth}%` }}
                ></div>
            </div>
        </>
    );
};

export default UsageCountBar;
