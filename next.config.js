/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // images: { unoptimized: true }
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageKitLoader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/testt/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
