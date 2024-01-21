import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "18": "4.5rem",
      },
      fontFamily: {
        apple: ["var(--font-apple)"],
      },
      gridTemplateColumns: {
        "26": "238px repeat(25, 39px)",
      },
      width: {
        "15": "60px",
      },
    },
    boxShadow: {
      normal: "0 3px 12px #00000029",
    },
  },
  plugins: [],
};
export default config;
