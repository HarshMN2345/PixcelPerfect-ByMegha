/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fdfdfd",
          "200": "#757575",
          "300": "#252220",
          "400": "#1e1e1e",
          "500": "#1b1b1b",
          "600": "#1e1515",
          "700": "#151514",
          "800": "#111011",
          "900": "#111101",
          "1000": "rgba(17, 16, 17, 0.1)",
          "1100": "rgba(255, 255, 255, 0.5)",
          "1200": "rgba(0, 0, 0, 0.34)",
        },
        mediumpurple: {
          "100": "#995ab3",
          "200": "rgba(153, 90, 179, 0.34)",
        },
        turquoise: "#81ecd3",
        goldenrod: {
          "100": "#facb53",
          "200": "#ffc42d",
          "300": "#cc9100",
        },
        dimgray: {
          "100": "#524747",
          "200": "rgba(101, 101, 117, 0.15)",
        },
        primary: "#000",
        moccasin: "#ffedc0",
        orange: "#feb700",
        darkslategray: "#033b2e",
        beige: "#dbe5d5",
        darkolivegreen: "#6d9057",
        antiquewhite: "#ffe2d2",
        darkorange: "#ff9227",
        darkslateblue: "#183d67",
        aliceblue: "#dff5ff",
        steelblue: "#369fd0",
        skyblue: "#7dc3e4",
        lightskyblue: {
          "100": "rgba(99, 195, 240, 0.33)",
          "200": "rgba(99, 195, 240, 0.23)",
        },
        mediumorchid: "#ca71ee",
        cornflowerblue: "#4ca8fd",
        coral: {
          "100": "#ef784f",
          "200": "rgba(255, 145, 77, 0.2)",
        },
        gainsboro: "#d9d9d9",
        oldlace: "#fdf7e9",
        wheat: "#fbebc2",
        honeydew: "#e2f8e3",
        mediumaquamarine: "#5dc7aa",
        lightgoldenrodyellow: "#c6f5c8",
        lavender: {
          "100": "#eee9fd",
          "200": "#e2d8ff",
        },
        "text-2": "#7c7c7c",
        "ui-2": "#f5f5f5",
        "text-1": "#2a2a2a",
        "primary-1": "#3c88ee",
        "dark-3-dark": "#898989",
        black: "#1a1919",
        royalblue: "#006aff",
        "gray-02": "#525256",
        "gray-021": "#656575",
        "ui-6": "#e7eaec",
      },
      spacing: {},
      fontFamily: {
        "title-medium": "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "981xl": "1000px",
        "45xl": "64px",
        "81xl": "100px",
        "11xl": "30px",
        "mini-5": "14.5px",
        "3xl-9": "22.9px",
        "17xl": "36px",
        "xs-2": "11.2px",
        "7xs-7": "5.7px",
        "2xs-5": "10.5px",
        "10xs-9": "2.9px",
        "12xs": "1px",
        "4xs-8": "8.8px",
        "9xs-9": "3.9px",
        "11xs": "2px",
        "12xs-2": "0.2px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      "lg-6": "18.6px",
      "21xl": "40px",
      "13xl": "32px",
      "6xl-2": "25.2px",
      xl: "20px",
      "69xl": "88px",
      "25xl": "44px",
      "7xl": "26px",
      "3xl": "22px",
      sm: "14px",
      "10xs-4": "2.4px",
      "9xs-4": "3.4px",
      "9xs-9": "3.9px",
      "6xs-8": "6.8px",
      "10xs-9": "2.9px",
      "3xs-7": "9.7px",
      "7xs-8": "5.8px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "base-7": "16.7px",
      inherit: "inherit",
    },
    animation: {
      scroll: 'scroll 20s linear infinite',
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(calc(-436.2px * 4))'}, // 4 is the number of unique images
      },
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
