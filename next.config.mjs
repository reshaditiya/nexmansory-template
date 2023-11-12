import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/hooks',
      '@mantine/carousel',
      '@mantine/code-highlight',
      '@mantine/dates',
      '@mantine/dropzone',
      '@mantine/form',
      '@mantine/notifications',
      '@mantine/modals',
      '@mantine/nprogress',
      '@mantine/spotlight',
      '@mantine/tiptap',
      '@mantine/ds',
    ],
  },
});
