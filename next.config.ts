import type { NextConfig } from "next";

const nextConfig: NextConfig = {

images: {
    domains: ['www.nytimes.com'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ftp.goit.study',
        pathname: '/img/petsfriends/**',
      },
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;
