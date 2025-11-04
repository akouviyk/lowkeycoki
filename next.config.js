/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ replaces `next export`
  basePath: '/lokicoki', // ✅ needed for GitHub Pages subdirectory
  assetPrefix: '/lokicoki', // ✅ ensures assets load from correct path
  images: {
    unoptimized: true, // ✅ needed for static exports
  },
  trailingSlash: true, // optional: helps with GitHub Pages routing
};

export default nextConfig;
