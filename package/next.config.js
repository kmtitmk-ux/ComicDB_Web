/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "comicdb4ec1987bcc0e49149860186233ff425a3010a-dev.s3.ap-northeast-1.amazonaws.com",
      "comicdb4ec1987bcc0e49149860186233ff425a715b3-main.s3.ap-northeast-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
