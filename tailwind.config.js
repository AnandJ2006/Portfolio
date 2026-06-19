/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#0f0f0f',
        card: '#1a1a1a',
        accent: '#6366f1',
        muted: '#a1a1aa',
      },
    },
  },
  plugins: [],
}

