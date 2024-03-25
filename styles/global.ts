"use client";

import { Inter } from "next/font/google";
import { createGlobalStyle } from "styled-components";

const inter = Inter({
    subsets: ["latin"]
});

export default createGlobalStyle`
    html {
        ${inter.style};
    }
`;
