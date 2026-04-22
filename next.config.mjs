import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // GH-1219: advertised OAuth metadata URLs point at /mcp; content lives under /docs/mcp-tools.
  async redirects() {
    return [
      { source: '/mcp', destination: '/docs/mcp-tools/setup', permanent: true },
      { source: '/mcp/:path*', destination: '/docs/mcp-tools/:path*', permanent: true },
    ];
  },
};

export default withMDX(config);
