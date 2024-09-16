/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pf014740a4bdfae54b9f9dfe9f39d0b14b2b163425-dev.s3.ap-northeast-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
