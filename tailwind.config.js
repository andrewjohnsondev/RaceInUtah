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
        calendar: {
          runs: '#40C3F7',
          trail: '#E74B4F',
          virtual: '#EB9650',
          roadBike: '#F6BE2E',
          mountainBike: '#A2E534',
          bikeTours: '#2AD3BF',
          gravelBike: '#5FA5F9',
          triathlon: '#E27BF9',
          duathlon: '#F67287',
          wheelchair: '#808CF7',
        },
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
