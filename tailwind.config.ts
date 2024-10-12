import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '60px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--clr-primary)", 
      },
      fontFamily: {
        serif: ['PT Serif', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '2xl-plus': '1.75rem', // 28px
      },
      height: {
        '25': '6.25rem', // 100px
        '26': '6.5rem',  // 104px
        '27': '6.75rem', // 108px
      },
      width: {
        '25': '6.25rem', // 100px
        '26': '6.5rem',  // 104px
        '27': '6.75rem', // 108px
      },
      lineHeight: {
        '6.5': '26px',
        '7.5': '30px',  // Custom line height
        '9.5': '38px',  // Custom line height
      },
    },
  },
  plugins: [],
};
export default config;
