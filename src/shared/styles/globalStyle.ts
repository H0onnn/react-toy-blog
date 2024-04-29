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
        font-family: 'Pretendard-Regular', sans-serif;
    }

    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
`;
