/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'lowkeycoki'; // Your repository name

const nextConfig = {
  output: 'export',
  
  // Base path for GitHub Pages (repository name)
  basePath: isProd ? `/${repoName}` : '',
  
  // Asset prefix should match base path
  assetPrefix: isProd ? `/${repoName}/` : '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Add trailing slashes to URLs
  trailingSlash: true,
  
  // Disable server-side features
  distDir: 'out',
};

export default nextConfig;
