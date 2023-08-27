"use client";

import { ThemeProvider } from "next-themes";
import { type FC, type ReactNode } from "react";

interface ProvidersProps {
    children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
        </ThemeProvider>
    );
};

export default Providers;
