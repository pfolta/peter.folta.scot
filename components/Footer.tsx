"use client";

import styled from "styled-components";

import Container from "@/components/Container";
import packageInfo from "@/package.json";

const StyledFooter = styled(Container)`
    background-color: black;
    color: white;

    padding-block: var(--container-padding-inline) calc(var(--container-padding-inline) + env(safe-area-inset-bottom));
`;

const { copyright } = packageInfo;

const Footer = () => <StyledFooter as="footer">{copyright}</StyledFooter>;

export default Footer;
