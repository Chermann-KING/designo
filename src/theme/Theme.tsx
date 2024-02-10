import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  colors: {
    primary: {
      peach: "#e7816b",
      black: "#1d1c1e",
      white: "#ffffff",
    },
    secondary: {
      lightPeach: "#ffad9b",
      darkGrey: "#333136",
      lightGrey: "#f1f3f5",
    },
  },
  typography: {
    fontFamily: "Jost, sans-serif",
    headings: {
      h1: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        lineHeight: "1.2",
        letterSpacing: "0.05rem",
      },
      h2: {
        fontSize: "2rem",
        fontWeight: "bold",
        lineHeight: "1.3",
        letterSpacing: "0.03rem",
      },
      h3: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        lineHeight: "1.4",
        letterSpacing: "0.02rem",
      },
      h4: {
        fontSize: "1.6rem",
        fontWeight: "bold",
        lineHeight: "1.5",
        letterSpacing: "0.01rem",
      },
      h5: {
        fontSize: "1.4rem",
        fontWeight: "bold",
        lineHeight: "1.6",
        letterSpacing: "0rem",
      },
      h6: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        lineHeight: "1.7",
        letterSpacing: "-0.01rem",
      },
    },
    body: {
      fontSize: "1rem",
      lineHeight: "1.6",
      letterSpacing: "0rem",
    },
  },

  buttons: {
    primaryButton: {
      backgroundColor: "#e7816b",
      color: "#ffffff",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    },
    secondaryButton: {
      backgroundColor: "transparent",
      color: "#333136",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "2px solid #333136",
      cursor: "pointer",
    },
  },
};

export default Theme;
