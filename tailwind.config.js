/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: '#b8a8d6',
          light: '#e8e3f3',
          dark: '#9a84c7',
        },
        pink: {
          DEFAULT: '#f5c4d0',
          light: '#fce9ef',
          dark: '#e8a7b8',
        },
        cream: '#faf8f3',
      },
    },
  },
  plugins: [],
};
