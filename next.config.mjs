/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KINDE_ISSUER_URL: process.env.KINDE_ISSUER_URL,
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

export default nextConfig;
