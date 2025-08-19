import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with 'dark' class
  content: [
    './index.html',
    './src/**/*.{js,jsx,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryText: '#000000',
        secondaryText: '#555555',
        gradient1: '#F6F7F8',
        gradient2: '#E3FDFD',
        gradient3: '#FCE2CE',
        gradient4: '#DAD4EF',
        // Add these to ensure gray colors are available
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        }
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'soft-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'neon-blue': "0 0 10px theme('colors.blue.400'), 0 0 20px theme('colors.blue.400'), 0 0 30px theme('colors.blue.400')",
        'neon-dark': "0 0 10px rgba(110, 5, 114, 0.3), 0 0 20px rgba(110, 5, 114, 0.3), 0 0 30px rgba(110, 5, 114, 0.3)"
      }
    },
  },
  plugins: [],
};