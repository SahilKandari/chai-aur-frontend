module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f0fdf9", 700: "#5b5b5b", "900_02": "#101014", "100_01": "#f2f3f6" },
        deep_purple: { 50: "#e4d3ff", A100: "#ae7aff", A200: "#9747ff" },
        white: { A700: "#ffffff", A700_7f: "#ffffff7f", A700_99: "#ffffff99" },
        blue_gray: {
          50: "#eaecf0",
          100: "#cfd4dc",
          500: "#667084",
          700: "#475466",
          800: "#344053",
          900: "#37333e",
          "700_7f": "#4754667f",
        },
        black: { 900: "#000000" },
        teal: { 700: "#039754", 800: "#126f64", "800_01": "#027947" },
        red: { 50: "#fef2f1", 900: "#b32218" },
      },
      boxShadow: { xs: "0px 1px  2px 0px #1018280f", sm: "0px 1px  2px 0px #1018280c" },
      fontFamily: { inter: "Inter" },
      backgroundImage: { gradient: "linear-gradient(180deg, #00000000,#00000066)" },
      textShadow: { ts: "0px 4px  4px #0000003f", ts1: "0px 1px  2px #1018280c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
