"use client";

import strftime from "strftime";
import styled from "styled-components";

import Container from "@/components/Container";
import * as Icon from "@/components/Icon";
import Link from "@/components/Link";
import packageInfo from "@/package.json";
import { screenLarge, screenSizeMediaQuery } from "@/styles/global";

const DATE_FORMAT = "%-d %B %Y";

const { bugs, copyright, repository } = packageInfo;

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

const Footer = () => (
    <StyledFooter as="footer">
        {copyright}
        <Link href={repository.url}>
            <Icon.GitHub />
            Source Code
        </Link>
        <Link href={bugs.url}>
            <Icon.Bug />
            Report an issue
        </Link>
        Last updated on {strftime(DATE_FORMAT, new Date(Number(process.env.LAST_UPDATED)))}
    </StyledFooter>
);

export default Footer;
