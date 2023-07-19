import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "CurlGPT",
    description: "ChatGPT in your favorite terminal",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>
                <Providers>
                    <Navbar />
                    {children}
                    <Analytics />
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
