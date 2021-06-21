const theme = require("./src/tailwind/theme");

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: { ...theme },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
