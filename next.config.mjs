/** @type {import('next').NextConfig} */
import nextra from 'nextra'

const nextConfig = {};

const withNextra = nextra({
  theme: './theme.tsx'
})

export default withNextra({ /* other next.js config */ })