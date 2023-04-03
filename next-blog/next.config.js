/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["127.0.0.1",'localhost']
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.API_BASE_URL,
  },
}

module.exports = nextConfig
