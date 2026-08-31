/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ember: '#7f1117',
        blood: '#3b0609',
        silver: '#c9c9cf',
        smoke: '#101014',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 36px rgba(127, 17, 23, 0.34)',
      },
    },
  },
  plugins: [],
};
