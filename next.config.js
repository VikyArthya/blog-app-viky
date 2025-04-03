/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
    eslint: {
        ignoreDuringBuilds: true, // ini akan melewati linting saat build
      },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
