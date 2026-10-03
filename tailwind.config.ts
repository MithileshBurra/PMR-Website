import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sriher: {
          navy: "#06273D",
          "navy-dark": "#002B4E",
          blue: "#003F7C",
          "blue-light": "#0056B3",
          crimson: "#BF2228",
          "crimson-dark": "#991B1F",
          gold: "#D4AF37",
          "gold-muted": "#C5A059",
          surface: "#F8FAFC",
          dark: "#0F172A",
        },
        emerald: {
          brand: "#003F7C", // Map to SRIHER Royal Navy Blue
          800: "#06273D",
          900: "#041B2D",
          950: "#02121E",
        },
        gold: {
          brand: "#D4AF37",
          muted: "#C5A059",
        },
      },
      fontFamily: {
        serif: ["Bitter", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        institutional: "0 20px 40px -15px rgba(6, 39, 61, 0.1), 0 0 15px rgba(191, 34, 40, 0.05)",
        "crimson-glow": "0 0 25px rgba(191, 34, 40, 0.3)",
        "navy-glow": "0 0 30px rgba(0, 63, 124, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
