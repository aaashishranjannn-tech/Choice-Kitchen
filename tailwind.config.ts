import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7f2',
          100: '#ffe6d7',
          200: '#ffc8a7',
          300: '#ff9b64',
          400: '#ff7a31',
          500: '#f05f18',
          600: '#c63f09',
          700: '#9b2f09',
          800: '#7b2410',
          900: '#5d1b0f'
        },
        accent: {
          50: '#e6f9ee',
          100: '#c9f1dd',
          200: '#93e2ba',
          300: '#5cd594',
          400: '#29c86f',
          500: '#25d366',
          600: '#1a9d4c',
          700: '#146d36',
          800: '#0f4d26',
          900: '#0b3219'
        }
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 23, 42, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
