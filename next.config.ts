import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Only apply this configuration to the Server-Side bundle
    if (isServer) {
      config.externals = [
        // Exclude these problematic modules from the Vercel (server) bundle
        ...config.externals,
        'jsdom',
        'parse5',
      ];
    }

    return config;
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**', // allow all images under /photos/
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
