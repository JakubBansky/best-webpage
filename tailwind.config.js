module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#160c32',        // Primary blue
        secondary: '#d0d7d6',      // Secondary gray
        textPrimary: '#212529',    // Dark text color
        textSecondary: '#6c757d',  // Muted gray text color
      },
    },
  },
  plugins: []
}