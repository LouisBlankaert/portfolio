module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Inter',
      secondary: 'Inter',
      tertiary: 'Poppins',
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
        primary: '#0a0e27',
        accent: '#00ff88',
        neon: {
          cyan: '#00f5ff',
          lime: '#00ff88',
          green: '#00dd9d',
        },
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
      boxShadow: {
        neon: '0 0 10px rgba(0, 255, 136, 0.75), 0 0 20px rgba(0, 255, 136, 0.5)',
        neonCyan: '0 0 10px rgba(0, 245, 255, 0.75), 0 0 20px rgba(0, 245, 255, 0.5)',
        neonGreen: '0 0 10px rgba(0, 221, 157, 0.75), 0 0 20px rgba(0, 221, 157, 0.5)',
      },
    },
  },
  plugins: [],
};
