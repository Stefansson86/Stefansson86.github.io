/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F0',
          200: '#F3EDE2',
          300: '#E8DFD0',
          400: '#D5C8B4',
        },
        terracotta: {
          50: '#FDF3F1',
          100: '#FAE5E1',
          200: '#F5C7BE',
          300: '#EE9F91',
          400: '#E57460',
          500: '#DC4A31',
          600: '#C73820',
          700: '#A42A16',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E6ECE6',
          200: '#CDDAD0',
          300: '#A8BEAD',
          400: '#7E9F86',
          500: '#5B8265',
          600: '#46684F',
          700: '#38533F',
        },
        charcoal: {
          800: '#2A2E2B',
          900: '#1A1D1B',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'playful': '4px 4px 0px 0px rgba(26, 29, 27, 0.08)',
        'playful-hover': '6px 6px 0px 0px rgba(26, 29, 27, 0.12)',
        'playful-sm': '2px 2px 0px 0px rgba(26, 29, 27, 0.08)',
      }
    },
  },
  plugins: [],
}
