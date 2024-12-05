/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
        AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
        AUTH_SECRET: process.env.AUTH_SECRET,
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          }
        ]
      },
    webpack: (config) => {
      config.resolve.alias.convas = false;
      return config;
    }
};

export default nextConfig;


