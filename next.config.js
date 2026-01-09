/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/evolvebasics/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/evolvebasics' : '',
};

export default nextConfig;