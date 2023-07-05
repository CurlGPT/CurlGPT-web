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
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [formattedData, setFormattedData] = useState<{ x: string; y: any }[]>(
        []
    );

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
        console.log("====================================");
        console.log(startDate, endDate);
        console.log("====================================");
        const fetchFormattedData = async () => {
            if (startDate && endDate) {
                const data = await getUsagePerMonth(startDate, endDate);
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
                display: true,
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

    return (
        <>
            <div className="flex w-32 justify-between items-center">
                <button onClick={() => {}}>
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

                <p className="font-semibold">JUNE</p>
                <button onClick={() => {}}>
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
