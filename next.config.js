/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/lowkeycoki',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
