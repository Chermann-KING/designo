import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        peach: string;
        black: string;
        white: string;
      };
      secondary: {
        lightPeach: string;
        darkGrey: string;
        lightGrey: string;
      };
    };
    typography: {
      fontFamily: string;
      headings: {
        h1: {
          fontSize: string;
          fontWeight: string;
          lineHeight: string;
          letterSpacing: string;
        };
        h2: {
          fontSize: string;
          fontWeight: string;
          lineHeight: string;
          letterSpacing: string;
        };
        h3: {
          fontSize: string;
          fontWeight: string;
          lineHeight: string;
          letterSpacing: string;
        };
        h4: {
          fontSize: string;
          fontWeight: string;
          lineHeight: string;
          letterSpacing: string;
        };
        h5: {
          fontSize: string;
          fontWeight: string;
          lineHeight: string;
          letterSpacing: string;
        };
        h6: {
          fontSize: string;
          fontWeight: string;
          lineHeight: string;
          letterSpacing: string;
        };
      };
      body: {
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
      };
    };
    buttons: {
      primaryButton: {
        backgroundColor: string;
        color: string;
        padding: string;
        borderRadius: string;
        border: string;
        cursor: string;
      };
      secondaryButton: {
        backgroundColor: string;
        color: string;
        padding: string;
        borderRadius: string;
        border: string;
        cursor: string;
      };
    };
    // ... autres propriétés du thème
  }
}
