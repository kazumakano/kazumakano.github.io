/** @type {import('next').NextConfig} */
module.exports = {
  distDir: process.env.NODE_ENV == "production" ? "docs" : undefined,
  output: process.env.NODE_ENV == "production" ? "export" : undefined,
  reactStrictMode: true,
}
