/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary_bg_clr: "#141414",
        text_clr: "#ffffff",
        text_dsc_clr: "#847c7c",
        text_accent: "#0047ff",
      },

      screens: {
        xs: "320px", // Custom screen size for extra small devices
        sm: "320px", // Custom screen size for small devices
        md: "768px", // Custom screen size for medium devices
        lg: "1024px", // Custom screen size for large devices
        xl: "1280px", // Custom screen size for extra large devices
      },
    },
  },
  plugins: [],
};
