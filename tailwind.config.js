/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      },
      colors: {
        primary: "#F0F6FC",
        bgRed: "#C10000",
        bgPrimary: "#F3F4F6",
      },
      fontFamily: {
        NeueBold: ["Neue-Bold"],
        NeueMedium: ["Neue-Medium"],
        NeueLight: ["Neue-Light"],
        NeueBlack: ["Neue-Black"],
        NeueThin: ["Neue-Thin"],
        NeueThinX: ["Neue-ThinX"],
        NeueRoman: ["Neue-Roman"],
      },
    },
  },
  plugins: [],
};
