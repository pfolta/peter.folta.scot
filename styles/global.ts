"use client";

import "inter-ui/inter.css";
import { createGlobalStyle } from "styled-components";

const screenMedium = "320px";
const screenLarge = "600px";
const screenMax = "1200px";

const screenSizeMediaQuery = (minWidth: string) => `@media (min-width: ${minWidth})`;

const GlobalStyle = createGlobalStyle`
    :root {
        --font-size: 4vw;
        --container-padding-inline: 1vw;

        ${screenSizeMediaQuery(screenMedium)} {
            --font-size: 16px;
            --container-padding-inline: 1rem;
        }

        ${screenSizeMediaQuery(screenLarge)} {
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
export { screenLarge, screenMax, screenMedium, screenSizeMediaQuery };
