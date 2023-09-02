/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'montserrat': ['montserrat', 'sans-serif'],
       // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      textColor: {
        white: "#FFF",
        black: "#000",
      },
      backgroundImage: {
        'image-slider': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'test': 'url(/images/wide-livingroom2.jpg)'
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
