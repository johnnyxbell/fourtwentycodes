import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    position: relative;
    min-height: 100%;
    padding: 0;
    margin: 0;
}
`;
function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
