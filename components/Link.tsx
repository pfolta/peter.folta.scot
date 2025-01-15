"use client";

import styled from "styled-components";

const Link = styled.a.attrs({
    target: "_blank",
    rel: "noreferrer"
})`
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

        @media (prefers-reduced-motion: no-preference) {
            &::after {
                padding-left: 0.75em;
            }
        }
    }
`;

export default Link;
