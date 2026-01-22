import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.189.1:3000",
  ],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-image-domain.com", // update to your actual image host
      },
    ],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
};

export default nextConfig;
