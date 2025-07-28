/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,vue,mdx}"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
  ],
  important: true,
}
