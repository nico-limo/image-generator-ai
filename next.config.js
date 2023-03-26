/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['cdn.iconscout.com']
  }
}

module.exports = nextConfig
