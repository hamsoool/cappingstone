import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {hostname: "motionarray.imgix.net"}
    ]
  }
};

export default nextConfig;
