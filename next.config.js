/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dggsrhbrfbvapapsajgq.supabase.co',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
