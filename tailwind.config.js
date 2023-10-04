/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max': '639px'},
      // Pantalla móvil: @media (max-width: 639px) { ... }

      'tablet': {'min': '640px', 'max': '1023px'},
      // Pantalla de tablet: @media (min-width: 640px and max-width: 1023px) { ... }

      'laptop': {'min': '1024px', 'max': '1279px'},
      // Pantalla de laptop: @media (min-width: 1024px and max-width: 1279px) { ... }

      'desktop': {'min': '1280px', 'max': '1535px'},
      // Pantalla de escritorio: @media (min-width: 1280px and max-width: 1535px) { ... }

      'large-desktop': {'min': '1536px'},
      // Pantalla de escritorio grande: @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

