module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "path": false,
          "os": false,
          "fs": false,
        },
      },
    },
  },
};