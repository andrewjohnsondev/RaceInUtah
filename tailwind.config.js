module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#40C3F7',
        secondary: '#E3F8FF',
        darkPrimary: '#2BB0ED',
        blueGrey: {
          100: '#F5F7FA',
          200: '#E4E7EB',
          300: '#CBD2D9',
          400: '#9AA5B1',
          500: '#7B8794',
          600: '#616E7C',
          700: '#3E4C59',
          800: '#323F4B',
          900: '#1F2933',
        },
      },
    },
  },
  plugins: [],
};
