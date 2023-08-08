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
        "dtu-background": "url('~/src/assets/images/DTUBackground.jpg')",
      },
    },
    borderRadius: {
      DEFAULT: "1.25rem",
    },
    colors: {
      white: "#FFFFFF",
      green: "#417B5A",
      red: "#990000",
      blue: "#084B83",
      orange: "#F58549",
    },
  },
  plugins: [],
};
