module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "width-308": "308px",
      },
      height: {
        "height-1056": "1056px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
