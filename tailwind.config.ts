import type { Config } from "tailwindcss";

const config: Config = {
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
        herobanner: "url('/assets/hero.png')",
        footer: "url('/assets/footer.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        NunitoSans: ["Nunito Sans"],
        raleway: ["Raleway"],
        montserrat: ["Montserrat"],
        mulish: ["Mulish"],
        saira: ["Saira"],
        ubuntu: ["Ubuntu"],
        publicsans: ["Public Sans"],
      },
    },
  },
  plugins: [],
};
export default config;
