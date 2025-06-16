/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    screens:{
      ssm: '375px',
      sm: '640px',
      md: '7px',
      lg: '102px',
    },
    extend: {},
  },
  plugins: [],
}

