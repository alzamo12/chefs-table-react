/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(21, 11, 43, 0.7);'
      },
      backgroundImage: {
        'banner-bg': "url('src/assets/images/chef-cooking.jpg')",
        
      }
    },
  },
  plugins: [],
}

