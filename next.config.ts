import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // <-- This is critical for static export!
    // You can keep domains/remotePatterns if you use remote images
  },
  output: 'export', // <-- Only if you are using static export (Netlify static, etc.)
};

export default nextConfig;