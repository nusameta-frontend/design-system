export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      // Opsi ini memberitahu plugin: "Biarkan browser menangani CSS modern"
      stage: 2,
      features: {
        "color-functional-notation": false, // JANGAN convert warna (oklch/lab)
        "custom-properties": false, // JANGAN convert variables
      },
    },
  },
};
