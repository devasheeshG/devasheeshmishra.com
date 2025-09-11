/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "media.geeksforgeeks.org",
      },
      {
        protocol: "https",
        hostname: "proeffico.com",
        pathname: "/**",
      },
      { protocol: "https", hostname: "www.gstatic.com", pathname: "/**" },
      { protocol: "https", hostname: "www.srmist.edu.in", pathname: "/**" },
      { protocol: "https", hostname: "media.licdn.com", pathname: "/**" },
    ],
  },
};
