import { getSession } from "next-auth/react";
import axios from "axios";

export async function getUsagePerMonth(startDate: string, endDate: string) {
    const session = await getSession();
    const headers = {
        Authorization: `Bearer ${session?.accessToken}`,
    };
    const response = await axios.get(
        `/api/v1/usage?start_date=${startDate}&end_date=${endDate}`,
        {
            headers,
        }
    );
    const { data } = response;

    if (data.error || !data.usage) {
        throw new Error(data.error ?? "Something went wrong");
    }
    let formattedDate = [];

    const { usage } = data;
    for (const day in usage) {
        const usagePerDay = { x: day, y: usage![day] };
        formattedDate.push(usagePerDay);
    }
    return formattedDate;
}
