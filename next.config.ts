import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  async rewrites() {
    return [
      {
        source: '/:path(rss|rss.xml|feed)',
        destination: '/api/feed/rss'
      },
      {
        source: '/:path(atom|atom.xml)',
        destination: '/api/feed/atom'
      },
      {
        source: '/:path(json|feed.json)',
        destination: '/api/feed/json'
      }
    ]
  }
}

export default nextConfig
