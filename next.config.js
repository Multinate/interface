/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  images: {
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig
