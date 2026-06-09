/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Static HTML export -> produces an `out/` folder suitable for S3 + CloudFront.
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
