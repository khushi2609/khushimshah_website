/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [2, 4, 8, 16, 32, 48, 64, 96, 128, 256, 512, 1024, 2048, 4096, 8192],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [],
    domains: ['localhost'],
  },
}

module.exports = nextConfig 