import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  swSrc: 'src/app/(site)/sw.ts',
  swDest: 'public/sw.js',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Used to guard against accidentally leaking SANITY_API_READ_TOKEN to the browser
    taint: true,
  },
  logging: {
    fetches: { fullUrl: false },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default withSerwist(nextConfig);
