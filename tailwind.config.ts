import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": { DEFAULT: "#53A3C5" },
        "secondary-color": { DEFAULT: "#6c757d" },
        "background-dark-color": { DEFAULT: "#212121" },
        "border-color": { DEFAULT: "#424242" },
        "background-light-color": { DEFAULT: "#f1f1f1" },
        "font-light-color": { DEFAULT: "#f2f2f2" },
        "font-dark-color": { DEFAULT: "#313131" },
        "font-dark-color-2": { DEFAULT: "#151515" },
        "siderbar-dark-color": { DEFAULT: "#1d1d1d" },
        "vue-color": { DEFAULT: "#41b883" },
        "laravel-color": { DEFAULT: "#f05340" },
        "react-color": { DEFAULT: "#61dbfb" },
        "purple-color": { DEFAULT: "#a09bd5" },
      },
      screens: {
        minimum: { max: "421px" },
        mid: { max: "571px" },
        large: { max: "1200px" },
        extraLarge: { max: "1400px" },
      },
    },
  },
  plugins: [],
};
export default config;
