module.exports = {
  important: true,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        trigger: '#1890ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
