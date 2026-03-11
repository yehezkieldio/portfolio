import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
    reactCompiler: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    allowedDevOrigins: ["192.168.137.*", "192.168.100.*"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
        ],
    },
};

export default withMDX(nextConfig);
