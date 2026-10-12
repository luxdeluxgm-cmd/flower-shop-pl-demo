/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind przeszukuje te pliki i generuje CSS tylko dla klas, których naprawdę używasz.
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        paper: '#f5f2eb',
        ruby: '#d81159',
        magenta: '#8f2d56',
        forest: '#0a2e1c',
        leaf: '#1b4332',
        ink: '#111111',
        blush: '#f2c4ce',
        black: '#000000',
        white: '#ffffff'
      },
      fontFamily: {
        editorial: ['"Playfair Display"', 'serif'],
        reading: ['"Cormorant Garamond"', 'serif'],
        mono: ['"Courier Prime"', 'monospace']
      }
    }
  },
  plugins: []
};
