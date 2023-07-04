import { ApiKey } from "@prisma/client";
import { ZodIssue } from "zod";

export interface CreateApiData {
    error: string | null;
    createdApiKey: ApiKey | null;
}

export interface RevokeApiData {
    error: string | ZodIssue[] | null;
    success: boolean;
}

export interface getUsagePerMonth {
    error: string | null;
    usage: Record<string, number>;
}
