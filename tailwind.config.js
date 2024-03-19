/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Martel': ['Martel', 'serif'],
        'Maven': ['Maven Pro', 'sans-serif']
      },
      fontWeight: {
        'black': '900',
        'bold': '700',
        'medium': '500',
        'regular': '400'
      },
      fontSize: {
        'xxxx-large': '48px',
        'xxx-large': '40px',
        'xx-large': '32px',
        'x-large': '24px',
        'large': '20px',
        'normal': '18px',
        'medium': '16px',
        'small': '14px'
      },
      colors: {
        'maroon-1': '#770000',
        'blue-1': '#112244',
        'gray-1': '#F5F8FA',
        'gray-2': '#E1E8ED',
        'gray-3': '#B4C0C9',
        'gray-4': '#424B54',
        'green-1': '#0A8A10',
        'green-2': '#0A8A10',
        'yellow-1': '#FDB703',
        'yellow-2': '#FDB703',
        'red-1': '#EA564F',
        'red-2': '#EA564F'
      },
      boxShadow: {
        'shadow-1': '0px 4px 4px 0px rgba(119,0,0,0.03)',
        'shadow-2': '4px 20px 28px 0px rgba(119,0,0,0.03)',
        'shadow-3': '4px 20px 28px 0px rgba(119,0,0,0.1)',
        'shadow-4': '0px 8px 30px 0px rgba(119,0,0,0.3)'
      },
      screens: {
        'desktop-1': { max: '1512px' },
        'desktop-2': { max: '1280px' },
        'tablet-1': { max: '1024px' },
        'tablet-2': { max: '744px' },
        'mobile-2': { max: '320px' }
      },
      borderRadius: {
        'shape-l': '20px',
        'shape-m': '8px',
        'shape-s': '3px',
        'shape-f': 'full'
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}

