/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'Helvetica', 'sans-serif'],
        druk: ['var(--font-druk)', 'Helvetica', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#000000',
          white: '#e7e7e7',
          red: '#ff6340',
          gray: {
            400: '#c4c4c4',
            800: '#272727'
          }
        }
      },
      borderRadius: {
        'main': '2rem', // corresponds to --rounded-main
      },
      fontSize: {
        'h1': '3.5rem',
        'h2': '2rem',
        'h3': '1.5rem',
        'p': '1.125rem',
        'p-lg': '1.5rem',
        'p-sm': '0.75rem'
      },
      spacing: {
        'lg': '3rem',
        'md': '1.5rem',
        '2xl': '8.75rem'
      },
      padding: {
        'lg': '3rem',
        'md': '1.5rem'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px"
        }
      }
    }
  },
  plugins: [],
}

