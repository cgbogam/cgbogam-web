/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cgbogam-web/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/cgbogam-web' : '',
  transpilePackages: ['@svgr/webpack'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: { unoptimized: true },
}

module.exports = nextConfig
