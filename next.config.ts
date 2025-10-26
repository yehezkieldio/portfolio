import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    experimental: {
        mcpServer: true,
        turbopackFileSystemCacheForDev: true,
    },
};

export default nextConfig;
