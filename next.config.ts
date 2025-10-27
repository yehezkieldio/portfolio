import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    experimental: {
        mcpServer: true,
        turbopackFileSystemCacheForDev: true,
    },
    allowedDevOrigins: ["192.168.137.2", "192.168.137.1"],
};

export default nextConfig;
