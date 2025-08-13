// tailwind.config.js
 
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,ts}'],
    // Toggle dark-mode based on .dark class or data-mode="dark"
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
      extend: {},
    },
    plugins: [],
  };