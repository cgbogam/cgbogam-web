/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  assetPrefix: process.env.NODE_ENV === "production"
    ? "https://cgbogam.github.io/cgbogam-web"
    : "",
  basePath: process.env.NODE_ENV === "production" ? '/cgbogam-web' : ''
}

module.exports = nextConfig
