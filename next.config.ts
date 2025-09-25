const isProd = process.env.NODE_ENV === 'production'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/portfolio' : '',
};

export default nextConfig;
