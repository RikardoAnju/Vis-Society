import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 requires an explicit allowlist for <Image quality>.
    qualities: [75, 90],
  },
};

export default nextConfig;
