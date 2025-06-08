/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
      "../../packages/ui/src/components/**/*.{js,ts,jsx,tsx,mdx}",
      // Specific paths for better scanning
      "../../packages/ui/src/components/*/index.tsx",
      "../../packages/ui/src/components/inits/*.tsx",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    // Ensure CSS is processed correctly
    important: false,
  };
  
  export default config;