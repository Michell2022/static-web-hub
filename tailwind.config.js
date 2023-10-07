/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      'desktop': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'laptop': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'tablet': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'tablet-Ipads': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'mobile ': {'max': '630px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}

