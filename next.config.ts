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
      {
        protocol: 'https',
        hostname: 'media4.giphy.com',
        pathname: '/media/**',
      },
            {
        protocol: 'https',
        hostname: 'ftp.goit.study',
        pathname: '/img/pets/**',
      },
    ],
  },
};


module.exports = nextConfig;

export default nextConfig;
