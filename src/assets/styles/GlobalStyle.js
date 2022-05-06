import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
  }
  
  a, button, input {
    color: inherit;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }
`;
