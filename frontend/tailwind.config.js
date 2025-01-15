/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "Uber-bg":"url('/src/images/Uber_background_1.jpeg')",
        "Uber-bg-2":"url(https://img.freepik.com/free-vector/city-background-design_1300-384.jpg?t=st=1736860393~exp=1736863993~hmac=bbd701eb209febb12aa012722e26650d30991d1c6cd38dd9e6e7b30aa5883962&w=740)",
      }
    },
  },
  plugins: [],
}

