/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0F",
        paper: "#E8E4D8",
        lime: "#C8F465",
        indigo: "#5B6AF7",
        panel: "#111118",
        muted: "#98958C",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Syne", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        serif: ["Instrument Serif", "serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(200, 244, 101, 0.2), 0 18px 50px rgba(91, 106, 247, 0.12)",
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at top, rgba(91, 106, 247, 0.14), transparent 28%), radial-gradient(circle at 80% 20%, rgba(200, 244, 101, 0.12), transparent 24%)",
      },
    },
  },
  plugins: [],
};
