module.exports = {
  important: true,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        trigger: '#1890ff',
      },
      backgroundImage: () => ({
        'gradient-radial-to-tr':
          'radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))',
        'gradient-radial-to-tl':
          'radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))',
        'gradient-radial-to-br':
          'radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))',
        'gradient-radial-to-bl':
          'radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
