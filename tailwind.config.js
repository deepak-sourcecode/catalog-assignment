/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-1': '#4B40EE',
        'dark-1': '#1A243A',
        'gray-1': '#BDBEBF',
        'gray-2': '#6F7177',
        'green-1': '#67BF6B',
      },
    },
  },
  plugins: [],
  important: true,
  corePlugins: {
    preflight: false,
  },
};
