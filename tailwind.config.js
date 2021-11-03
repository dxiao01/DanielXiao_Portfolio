module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'topbar': '#15023a',
      },
      height: {
        'section': 'calc(100vh - 70px)',
        '70px': '70px',
        '4.5': '4.5rem',
        '3': '3px'
      },
      zIndex: {
        '2': '2',
      },
      flexGrow: {
        '0.5': '0.5',
      },
      fontWeight: ['hover', 'focus'],
      
    },
  },
  variants: {
    extend: {
      scrollSnapType: ['responsive'],
    },
  },
  plugins: [require('tailwindcss-scroll-snap')],
}
