/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/index.html',
        destination: '/',
      },
      {
        source: '/:path*.html',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;

