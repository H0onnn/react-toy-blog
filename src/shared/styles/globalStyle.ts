import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    ul, ol {
        list-style: none;
    }  

    button {
        all: unset;
        cursor: pointer;
    }

    input, textarea {
        all: unset;
    }

    html {
        font-size: 62.5%;
    }

    html,
    body {
        margin:0;
        padding:0;
    }

    @font-face {
        font-family: 'Prentendard';
        src: url('/fonts/Pentendard-Regular.otf');
    }
`;
