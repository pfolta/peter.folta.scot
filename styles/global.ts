"use client";

import "inter-ui/inter.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    body {
        font-family: "Inter", "system-ui", sans-serif;
        -webkit-font-smoothing: antialiased;
        line-height: 1.5;
    }

    input, button, textarea, select {
        font: inherit;
    }
`;

export default GlobalStyle;
