import { heroui } from "@heroui/theme";
import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#F5F5F5", // light gray
            },
          },
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#22272B", // dark background
            },
          },
        },
      },
    }),
    scrollbar,
  ],
};
