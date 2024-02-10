import { ThemeProvider } from "styled-components";
import Theme from "@/theme/Theme";
import "../app/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
