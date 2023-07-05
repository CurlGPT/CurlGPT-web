"use client";
import { FC, useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getUsagePerMonth } from "@/app/helper/get-usage-per-month";
import { startOfMonth, subMonths, addMonths, format } from "date-fns";

interface BarChartProps {}

const BarChart: FC<BarChartProps> = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [currentMonth, setCurrentMonth] = useState(
        new Date().toLocaleString("default", { month: "long" })
    );

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [formattedData, setFormattedData] = useState<
        { x: string; y: any }[] | undefined
    >([]);

    useEffect(() => {
        const firstDateOfCurrentMonth = startOfMonth(currentDate);
        const formattedCurrentMonth = format(
            firstDateOfCurrentMonth,
            "yyyy-MM-dd"
        );
        setStartDate(formattedCurrentMonth);

        const nextMonth = addMonths(currentDate, 1);
        const firstDateOfNextMonth = startOfMonth(nextMonth);
        const formattedNextMonth = format(firstDateOfNextMonth, "yyyy-MM-dd");
        setEndDate(formattedNextMonth);
    }, [currentDate]);

    useEffect(() => {
        const fetchFormattedData = async () => {
            if (startDate && endDate) {
                let data;
                try {
                    setIsLoading(true);
                    data = await getUsagePerMonth(startDate, endDate);
                } catch (error: any) {
                    console.error(error);
                } finally {
                    setIsLoading(false);
                }
                setFormattedData(data);
            }
        };

        fetchFormattedData();
    }, [startDate, endDate]);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        plugins: {
            legend: {
                position: "top" as const,
                display: false,
            },
            title: {
                display: false,
                text: "Prompt Usage",
            },
        },
        responsive: true,
        normalized: true,
    };

    const data = {
        datasets: [
            {
                label: "Prompts",
                data: formattedData,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgb(53, 162, 235, 0.4",
                borderWidth: 1,
                showLine: false,
                pointRadius: 0,
            },
        ],
        parsing: false,
        normalized: true,
    };

    const handlePreviousMonth = async () => {
        const previousMonth = subMonths(currentDate, 1);
        setCurrentMonth(
            previousMonth.toLocaleString("default", { month: "long" })
        );
        setCurrentDate(previousMonth);
    };
    const handleNextMonth = async () => {
        const nextMonth = addMonths(currentDate, 1);
        setCurrentMonth(nextMonth.toLocaleString("default", { month: "long" }));
        setCurrentDate(nextMonth);
    };

    return (
        <>
            <div className="flex w-40 justify-between items-center">
                <button onClick={handlePreviousMonth}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
                <p className="font-semibold">
                    {currentMonth.toLocaleUpperCase()}
                </p>
                <button onClick={handleNextMonth}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
            {isLoading && (
                <div
                    role="status"
                    className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
                >
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            )}
            <Bar options={options} data={data} />
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                    Usage
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                    200 / 500
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[40%]"></div>
            </div>
        </>
    );
};

export default BarChart;
