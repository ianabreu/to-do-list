import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;
  }
  button, a {
    cursor: pointer;
    border: none;
    transition: all 0.3s;
  }
  span {
    transition: all 0.3s;
  }
`;
