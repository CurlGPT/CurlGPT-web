"use client";
import React from "react";
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
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

export const data = {
    datasets: [
        {
            label: "Prompts",
            data: [
                { x: "1 Jun", y: 42 },
                { x: "2 Jun", y: 87 },
                { x: "3 Jun", y: 15 },
                { x: "4 Jun", y: 64 },
                { x: "5 Jun", y: 92 },
                { x: "6 Jun", y: 28 },
                { x: "7 Jun", y: 50 },
                { x: "8 Jun", y: 76 },
                { x: "9 Jun", y: 31 },
                { x: "10 Jun", y: 58 },
                { x: "11 Jun", y: 70 },
                { x: "12 Jun", y: 5 },
                { x: "13 Jun", y: 94 },
                { x: "14 Jun", y: 39 },
                { x: "15 Jun", y: 81 },
                { x: "16 Jun", y: 19 },
                { x: "17 Jun", y: 73 },
                { x: "18 Jun", y: 12 },
                { x: "19 Jun", y: 67 },
                { x: "20 Jun", y: 52 },
                { x: "21 Jun", y: 36 },
                { x: "22 Jun", y: 60 },
                { x: "23 Jun", y: 44 },
                { x: "24 Jun", y: 78 },
                { x: "25 Jun", y: 9 },
                { x: "26 Jun", y: 62 },
                { x: "27 Jun", y: 25 },
                { x: "28 Jun", y: 88 },
                { x: "29 Jun", y: 49 },
                { x: "30 Jun", y: 33 },
            ],
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

const BarChart = () => {
    return (
        <>
            <div className="flex w-32 justify-between items-center">
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
                <p className="font-semibold">JUNE</p>
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
