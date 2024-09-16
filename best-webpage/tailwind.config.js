// // tailwind.config.js
// module.exports = {
//   purge: [],
//   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   content: [
//     './public/**/*.html',
//     './src/**/*.{js,jsx,ts,tsx,vue}',
//   ]
// }

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Any custom styles or extensions go here
    },
  },
  plugins: [],
}