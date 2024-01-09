/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'my-background-image':
          "url('C:/Users/Admin/Desktop/OneWeedShop/OW_FE/public/images/bg_login/bg_login.jpg')",
      },
    },
  },
  plugins: [],
};
