import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        serif: ["var(--font-playfair)", "serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGray: '#F0F0F0',
      },
    },
  },
  plugins: [],
};
export default config;
