const theme = require("./src/tailwind/theme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: { ...theme },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
