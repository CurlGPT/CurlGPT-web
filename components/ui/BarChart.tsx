"use client";
import React, { FC, useEffect, useState } from "react";
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

interface ChartData {
    datasets: {
        label: string;
        data: any; // The type of formattedDate is not specified in the given data
        borderColor: string;
        backgroundColor: string;
        borderWidth: number;
        showLine: boolean;
        pointRadius: number;
    }[];
    parsing: boolean;
    normalized: boolean;
}
interface BarChartProps {
    formattedDate: { x: string; y: number }[] | undefined;
}

const BarChart: React.FC<BarChartProps> = ({ formattedDate }) => {
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
                data: formattedDate,
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
