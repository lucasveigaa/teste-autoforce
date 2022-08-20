import { createGlobalStyle } from "styled-components";

export const GLobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
    :focus {
        outline: 0;
    }
    body, input, textarea, button {
       font-family: 'Open Sans', sans-serif;
    }
`;