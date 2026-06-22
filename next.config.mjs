import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  swSrc: 'src/app/(site)/sw.ts',
  swDest: 'public/sw.js',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    taint: true,
  },
  turbopack: {},
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
  async headers() {
    const baseHeaders = [
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
    ];

    return [
      {
        // Main site: strict CSP — no unsafe-eval, no third-party script hosts
        source: '/((?!studio).*)',
        headers: [
          ...baseHeaders,
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' https://cdn.sanity.io data: blob:",
              "font-src 'self'",
              'frame-src https://www.youtube.com https://www.youtube-nocookie.com',
              "connect-src 'self' https://*.api.sanity.io https://*.sanity.io",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "worker-src 'self'",
            ].join('; '),
          },
        ],
      },
      {
        // Sanity Studio: relaxed CSP — Studio requires unsafe-eval for its code editor
        source: '/studio/:path*',
        headers: [
          ...baseHeaders,
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.sanity.io",
              "style-src 'self' 'unsafe-inline' https://cdn.sanity.io",
              "img-src 'self' https://cdn.sanity.io data: blob:",
              "font-src 'self' https://cdn.sanity.io",
              "frame-src 'self' https://cdn.sanity.io",
              "connect-src 'self' https://*.api.sanity.io https://*.sanity.io wss://*.sanity.io",
              "media-src 'self' https://cdn.sanity.io",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default withSerwist(nextConfig);
