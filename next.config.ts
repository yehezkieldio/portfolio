import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    allowedDevOrigins: ["192.168.137.2"],
};

export default nextConfig;
