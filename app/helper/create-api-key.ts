import { CreateApiData } from "@/types/api/key";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";

export async function createApiKey() {
    const session = await getServerSession(authOptions);
    const headers = {
        Authorization: `Bearer ${session?.accessToken}`,
    };
    const res = await fetch("http://localhost:3000/api/api-key/create", {
        headers,
    });
    const data = (await res.json()) as CreateApiData;

    if (data.error || !data.createdApiKey) {
        throw new Error(data.error ?? "Something went wrong");
    }

    return data.createdApiKey.key;
}
