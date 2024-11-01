/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pf014740a4bdfae54b9f9dfe9f39d0b14b2b163425-dev.s3.ap-northeast-1.amazonaws.com",
      "comicdb4ec1987bcc0e49149860186233ff425a715b3-main.s3.ap-northeast-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
