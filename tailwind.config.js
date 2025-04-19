module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        primary: '#160c32',        // Primary blue
        primaryLight: '#2a1d56',  // Light blue
        primaryDark: '#0f0e1c',   // Dark blue
        secondary: '#d0d7d6',      // Secondary gray
        secondaryLight: '#f8f9fa', // Light gray
        secondaryDark: '#343a40', // Dark gray
        textPrimary: '#212529',    // Dark text color
        textSecondary: '#6c757d',  // Muted gray text color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          "text-shadow": "3px 3px 1px rgba(0, 0, 0, 1)",
        },
      });
    },
  ]
}