import { getSession } from "next-auth/react";
import axios from "axios";

export async function getUsageCount() {
    const session = await getSession();
    const headers = {
        Authorization: `Bearer ${session?.accessToken}`,
    };
    const response = await axios.get(`/api/v1/usage/count`, {
        headers,
    });
    const { data } = response;

    if (data.error || !data.count) {
        throw new Error(data.error ?? "Something went wrong");
    }

    return data.count;
}
