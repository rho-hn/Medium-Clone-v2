/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true
  },
  images: {
    
    domains: ['player.vimeo.com',"cdn.sanity.io","cdn-static-1.medium.com"]
  },
}

module.exports = nextConfig
