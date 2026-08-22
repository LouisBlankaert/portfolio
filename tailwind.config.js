module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Inter',
      secondary: 'Inter',
      tertiary: 'Poppins',
      display: 'Fredoka',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        card: '#141414',
        accent: '#ffd60a',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
      },
      boxShadow: {
        accent: '0 0 0 1px rgba(255, 214, 10, 0.4)',
      },
    },
  },
  plugins: [],
};
