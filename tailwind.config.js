module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      mainBg: "#F4F6FC",
      transparent: "transparent",
      current: "currentColor",
      white: "#E9EDF7",
      white2: "#FFFFFF",
      mainBlue: "#0089CF",
      borderColor: "#E9F5FC",
      iconColor: "#5D888F",
      hoverBg: "#C0C6D4",
      primary: "#10768D",
      primar2: "#0d5c75",
      info: "#A5D1E1",
      default: "#199FB1",
      txtDark: "#262626",
      txtWhite: "#eaeaea",
      Error: "#BB120E",
      Success: "#0B9314",
      Warning: "#EE6619",
      bgInput: "#EBEDED",
      bgInput2: "#ECECEE",
      background2: "#D9E0F0",
      focusInput: "#0978A4",
      text2: "#ABABAB",
      linkBlue:'#3E8BFF',
      gold: "#FFB300",
      silver: "#B5B7BB",
      normal: "#38CBD9",
      goldLite: '#FFF9EB',
      silverLite: '#F5F5F5',
      normalLite: '#EAFDFF',
      PureWhite: "#fff",
      greenLoad: '#36d7b7',
      shadowWrapper: "#A1B4B7",
      warmBlue: "#10768D",
      white3: "#FCFCFC",
      gray: "#c0c0c0",
      black: "#000000"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["IRANSans", "Tahoma", "sans"],
      },
    },
  },
  plugins: [require("tailwindcss-dir")(), require("tailwindcss-rtl")],
};
