"use client";

import "inter-ui/inter.css";
import { createGlobalStyle } from "styled-components";

const screenWidthMedium = "320px";
const screenWidthLarge = "600px";
const screenWidthMax = "1200px";

const GlobalStyle = createGlobalStyle`
    :root {
        --font-size: 4vw;
        --container-padding-inline: 1vw;

        /* stylelint-disable-next-line media-query-no-invalid */
        @media (min-width: ${screenWidthMedium}) {
            --font-size: 14px;
            --container-padding-inline: 1rem;
        }

        /* stylelint-disable-next-line media-query-no-invalid */
        @media (min-width: ${screenWidthLarge}) {
            --font-size: 16px;
            --container-padding-inline: 2rem;
        }
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html {
        font-family: "Inter", system-ui, sans-serif;
        font-size: var(--font-size);
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
    }

    body {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        height: 100vh;
    }

    input, button, textarea, select {
        font: inherit;
    }
`;

export default GlobalStyle;
export { screenWidthLarge, screenWidthMax, screenWidthMedium };
