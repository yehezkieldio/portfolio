import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    experimental: {
        mcpServer: true,
    },
};

export default nextConfig;
