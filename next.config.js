/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "source.unsplash.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
