/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/lorefais' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lorefais' : '',
};

export default nextConfig;
