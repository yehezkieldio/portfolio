import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        viewTransition: true,
    },
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

const withMDX = createMDX();

export default withMDX(nextConfig);
