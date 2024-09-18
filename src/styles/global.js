import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: 10px !important;
    }

    body{
      //  background: ${({ theme }) => theme.COLORS.DARK_400}
    }
`