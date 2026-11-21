/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/international-collaborations",
        destination: "/collaborations",
        permanent: true,
      },
      {
        source: "/uab",
        destination: "/collaborations",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
