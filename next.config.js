/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["localhost"] }
  /* env: {
     APP_URL: proccess.env.REACT_APP_URL,
     APP_ENV: proccess.env.REACT_APP_ENV
   }*/
};

module.exports = nextConfig;
