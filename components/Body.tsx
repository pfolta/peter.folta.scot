"use client";

import "inter-ui/inter.css";
import styled from "styled-components";

const Body = styled.body`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    height: 100vh;

    font-family: "Inter", "system-ui", sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
`;

export default Body;
