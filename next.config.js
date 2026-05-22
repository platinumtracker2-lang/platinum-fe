/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Linting runs in CI separately; skip during `next build` to avoid
    // the ESLint 9 / eslint-config-next circular-JSON issue on Vercel.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
