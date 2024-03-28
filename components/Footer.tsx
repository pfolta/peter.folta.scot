"use client";

import styled from "styled-components";

import packageInfo from "@/package.json";

const StyledFooter = styled.footer`
    background-color: black;
    color: white;

    padding: 1rem;
`;

const { copyright } = packageInfo;

const Footer = () => <StyledFooter>{copyright}</StyledFooter>;

export default Footer;
