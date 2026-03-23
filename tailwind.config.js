export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edf3ff',
          100: '#dbe8ff',
          500: '#2d62c7',
          600: '#1f4ea8',
          700: '#0f3b7a',
          900: '#10233f',
        },
        accent: {
          100: '#ffe3df',
          500: '#dc5a4b',
          600: '#c53b35',
          700: '#9f2c29',
        },
        neutral: {
          50: '#f8f5ef',
          100: '#efe8dc',
          600: '#5c6470',
          900: '#10233f',
        },
      },
      fontFamily: {
        sans: ['Georgia', '"Times New Roman"', 'ui-serif', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 50px rgba(16, 35, 63, 0.08)',
      },
    },
  },
  plugins: [],
};
