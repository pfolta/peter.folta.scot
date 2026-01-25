"use client";

import styled from "styled-components";

interface LinkProps {
    $color?: string;
}

const Link = styled.a.attrs({
    target: "_blank",
    rel: "noreferrer"
})<LinkProps>`
    text-decoration: none;
    color: currentColor;

    &::after {
        content: "→";
        padding-left: 0.25em;
        position: absolute;
        transition: padding 0.15s ease-in-out;
    }

    &:hover,
    &:focus {
        outline: none;
        text-decoration: underline;

        ${({ $color }) =>
            $color &&
            `
            color: ${$color};
        `}

        @media (prefers-reduced-motion: no-preference) {
            &::after {
                padding-left: 0.75em;
            }
        }
    }
`;

export default Link;
export type { LinkProps };
