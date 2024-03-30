"use client";

import styled from "styled-components";

import Container from "@/components/Container";
import packageInfo from "@/package.json";

const StyledFooter = styled(Container)`
    background-color: black;
    color: white;
`;

const { copyright } = packageInfo;

const Footer = () => <StyledFooter as="footer">{copyright}</StyledFooter>;

export default Footer;
