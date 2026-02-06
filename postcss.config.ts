export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 2,
      features: {
        "color-functional-notation": false,
        "custom-properties": false,
      },
    },
  },
};
