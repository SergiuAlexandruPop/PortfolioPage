import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 2rem 8rem;

    @media screen and (max-width: 900px) {
      padding: 1rem ;
    }

    @media screen and (max-width: 500px) {
      padding: 0.5rem ;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

`;
