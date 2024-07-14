import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--color-white)',
        brand: 'var(--color-brand)',
        dark: 'var(--color-dark)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
