const colors = require("./colors");
module.exports = {
  textColor: {
    ...colors.colors,
  },
  backgroundColor: {
    ...colors.colors,
  },
  borderColor: {
    ...colors.colors,
  },
  fill: {
    ...colors.colors,
  },
  stroke: {
    ...colors.colors,
  },
  gradientColorStops: {
    ...colors.colors,
  },
  letterSpacing: {
    "wide-1": "0.1em",
    "wide-2": "0.2em",
    "wide-3": "0.3em",
    "wide-4": "0.4em",
    widest: "0.8em",
  },
  maxHeight: {
    "80-full": "80vh",
    "85-full": "85vh",
    "90-full": "90vh",
  },
  minHeight: {
    "80-full": "80vh",
    "85-full": "85vh",
    "90-full": "90vh",
  },
  backgroundImage: {
    "hero-pattern": "url('../assets/images/Pattern.png')",
  },
  fontFamily: {
    abril: ["Abril Fatface"],
    merri: ["Merriweather"],
    barlow: ["Barlow Condensed"],
    roboto: ["Roboto Mono"],
  },
};
