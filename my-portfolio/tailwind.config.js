/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        typingCursor: {
          from: {
            borderRight: "2px solid white",
          },
          to: { borderRight: "2px solid black" },
        },
      },
      animation: {
        typingCursor: "typingCursor 1s ease-in-out 0ms 2",
      },
      height: {
        128: "32rem",
        112: "28rem",
        108: "27rem",
        104: "26rem",
      },
      width: {
        128: "32rem",
        112: "28rem",
        108: "27rem",
        104: "26rem",
      },
    },
  },
};
