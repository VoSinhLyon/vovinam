/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vovi: {
          blue: "#0057A8",
          blueSoft: "#E5F0FB",
          yellow: "#F9D648",
          yellowSoft: "#FFF7D1",
          red: "#E3342F",
        },
      },
      boxShadow: {
        soft: "0 10px 25px rgba(15, 23, 42, 0.08)",
        card: "0 16px 40px rgba(15, 23, 42, 0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
