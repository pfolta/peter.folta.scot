"use client";

import styled from "styled-components";

import Container from "@/components/Container";
import packageInfo from "@/package.json";
import { screenLarge, screenSizeMediaQuery } from "@/styles/global";

const StyledFooter = styled(Container)`
    background-color: black;
    color: white;

    padding-block: var(--container-padding-inline) calc(var(--container-padding-inline) + env(safe-area-inset-bottom));

    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    text-align: center;

    ${screenSizeMediaQuery(screenLarge)} {
        place-items: normal;
        text-align: start;
    }
`;

const { copyright } = packageInfo;

const Footer = () => <StyledFooter as="footer">{copyright}</StyledFooter>;

export default Footer;
