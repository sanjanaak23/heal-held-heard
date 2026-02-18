/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-anybody)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#624b8b6c',
          light: '#A78BFA',
          lighter: '#E9D5FF',
          dark: '#5B21B6',
        },
        secondary: {
          DEFAULT: '#C4B5FD',
        },
        accent: {
          purple: '#A855F7',
          rose: '#EC4899',
          amber: '#F59E0B',
          teal: '#14B8A6',
        },
        neutral: {
          50: '#F6F2FF', // changed to pale lavender
        },
        text: {
          DEFAULT: '#666697',
          soft: '#6B5DD6', // softened toward purple
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};