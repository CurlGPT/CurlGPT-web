import { getUsagePerMonth } from "@/types/api/key";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";

export async function getUsagePerMonth(startDate: string, EndDate: string) {
    const session = await getServerSession(authOptions);
    const headers = {
        Authorization: `Bearer ${session?.accessToken}`,
    };
    const res = await fetch(
        `${process.env.BASEURL}/api/v1/usage?start_date=${startDate}&end_date=${EndDate}`,
        {
            headers,
        }
    );
    const data = (await res.json()) as getUsagePerMonth;

    if (data.error || !data.usage) {
        throw new Error(data.error ?? "Something went wrong");
    }

    return data.usage;
}
