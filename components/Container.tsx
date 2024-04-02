"use client";

import styled from "styled-components";

import { screenMax } from "@/styles";

const Container = styled.div`
    --padding-inline-query: (100vw - min(100vw - 2 * var(--container-padding-inline), ${screenMax})) / 2;
    --padding-inline-start: calc(var(--padding-inline-query) + env(safe-area-inset-left));
    --padding-inline-end: calc(var(--padding-inline-query) + env(safe-area-inset-right));

    padding-inline: var(--padding-inline-start) var(--padding-inline-end);
`;

export default Container;
