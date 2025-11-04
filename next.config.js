/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/lowkeycoki',
  assetPrefix: 'https://akouviyk.github.io/lowkeycoki',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
