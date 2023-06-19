/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "how2terminal.com",
            },
        ],
    },
};

module.exports = nextConfig;
