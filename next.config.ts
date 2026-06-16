import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',      // Static HTML export — served from Firebase CDN
  trailingSlash: true,   // /about → /about/index.html — required for Firebase Hosting routing
  images: {
    unoptimized: true,   // Static export does not support Next.js image optimization server
  },
}

export default nextConfig
