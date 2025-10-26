import { createGlobalStyle } from "styled-components";
import { COLORS } from "@/constants";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'PT Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${COLORS.BG_PRIMARY};
    color: #333333;
    min-height: 100vh;
     
  }

  #root {
    min-height: 100vh;
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
