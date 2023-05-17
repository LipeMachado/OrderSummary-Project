import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        transition: all 0.3s ease-in-out;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: hsl(225, 100%, 94%);
        font-family: 'Red Hat Display', sans-serif;
        color: #000000;
    }
`;