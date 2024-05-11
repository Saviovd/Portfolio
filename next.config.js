/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   eslint: {
      ignoreDuringBuilds: true,
   },
   images: {
      domains: ['media.licdn.com'],
   },
   // compiler: {
   //    styledComponents: true,
   // }
};

module.exports = nextConfig;
