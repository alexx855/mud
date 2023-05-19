module.exports = {
  reactStrictMode: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: {
    esmExternals: 'loose'
  },
  transpilePackages: [
    "@latticexyz/common",
    "@latticexyz/dev-tools",
    "@latticexyz/network",
    "@latticexyz/react",
    "@latticexyz/recs",
    "@latticexyz/schema-type",
    "@latticexyz/std-client",
    "@latticexyz/utils",
    "@latticexyz/world",
    "@ethersproject/providers",
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /node_modules\/.*\/(node:crypto)\.js/,
      resolve: {
        alias: {
          "node:crypto": require.resolve("crypto-browserify"),
        },
      },
    });

    return config;
  },
};