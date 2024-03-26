"use client";

import { createGlobalStyle } from "styled-components";

import { InterFont } from "@/styles";

const GlobalStyle = createGlobalStyle`
    html {
        ${InterFont.style};
    }
`;

export default GlobalStyle;
