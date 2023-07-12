const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlausibleProxy()(nextConfig);

const withVideos = require('next-videos')

module.exports = withVideos()

// headers: async () => [
//   {
//     source: "/api/:path*",
//     headers: [
//       { key: "Access-Control-Allow-Origin", value: "*" },
//       { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//       { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, Accept" },
//     ],
//   },
// ]

// const withVideos = require('next-videos')

// module.exports = withVideos({
//   // assetPrefix: 'https://d1s8hc4jzg476k.cloudfront.net/video2.mp4',

//   webpack(config, options) {
//     return config
//   }
// })
