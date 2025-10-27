import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    experimental: {
        turbopackFileSystemCacheForDev: true,
    },
    allowedDevOrigins: ["192.168.137.2", "192.168.137.1"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
