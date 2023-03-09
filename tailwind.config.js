/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'left-content': "url('./dist/images/bg-main-desktop.png')",
      },
      fontFamily: {
        'primary': ['Space Grotesk'],
      },
    },
  },
  plugins: [],
}
