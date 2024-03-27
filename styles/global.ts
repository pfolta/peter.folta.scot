"use client";

import "inter-ui/inter.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Inter", "system-ui", sans-serif;
        line-height: calc(1em + 0.5rem);
        -webkit-font-smoothing: antialiased;
        margin: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    input, button, textarea, select {
        font: inherit;
    }
`;

export default GlobalStyle;
