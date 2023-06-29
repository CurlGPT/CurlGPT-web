import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;

declare module "next-auth/jwt" {
    interface JWT {
        id: UserId;
        accessToken: string | undefined;
    }
}

declare module "next-auth" {
    interface Session {
        user: User & {
            id: UserId;
        };
        accessToken: string | undefined;
    }
}
