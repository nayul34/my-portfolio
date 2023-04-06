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
        typingCursor: "typingCursor 2s ease-in-out 0ms 2",
      },
      height: {
        160: "40rem",
        128: "32rem",
        112: "28rem",
        108: "27rem",
        104: "26rem",
        100: "25rem",
        95: "23.75rem",
        79: "19.75rem",
        71: "17.75rem",
        55: "13.75rem",
        43: "10.75rem",
        42: "10.5rem",
      },
      width: {
        128: "32rem",
        112: "28rem",
        111: "27.75rem",
        110: "27.5rem",
        108: "27rem",
        104: "26rem",
        100: "25rem",
        95: "23.75rem",
        79: "19.75rem",
        71: "17.75rem",
        55: "13.75rem",
        43: "10.75rem",
        42: "10.5rem",
      },
    },
  },
};
