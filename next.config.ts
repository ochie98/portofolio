import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // untuk static export (GitHub Pages)
  basePath: "/portofolio", // ganti sesuai nama repo kamu
  assetPrefix: "/portofolio/",
  images: {
    unoptimized: true, // GitHub Pages tidak support Image Optimization
  },
};

export default nextConfig;