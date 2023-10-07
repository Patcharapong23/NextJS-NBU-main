/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;
module.exports = {
  webpack(config) {
    webpack: (config) => {
      config.resolve.alias["@"] = path.resolve(__dirname);
      return config;
    },
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });

    return config;
  },
};
