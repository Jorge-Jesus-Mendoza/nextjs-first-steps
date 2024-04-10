/** @type {import('next').NextConfig} */

// const nextConfig = {
//     output: 'standalone',
// };

const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    swcMinify: true,
    images:{
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com'
        },
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com'
        }
      ]
    },
    webpack: (config, context) => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300
      }
      return config
    }
  }

export default nextConfig;
