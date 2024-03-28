"use client";

import { ReactNode } from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

const A = styled.a`
    text-decoration: none;
    color: black;

    &::after {
        content: "→";
        padding-left: 0.5rem;
        position: absolute;
        transition: padding 0.15s ease-in-out;
    }

    &:hover,
    &:focus {
        outline: none;
        text-decoration: underline;

        @media (prefers-reduced-motion: no-preference) {
            &::after {
                padding-left: 1rem;
            }
        }
    }
`;

const IconWrapper = styled.span`
    margin-right: 0.5rem;
    vertical-align: -0.125em;

    svg {
        height: 1em;
        width: 1em;
        stroke: currentColor;
        fill: currentColor;
    }
`;

interface LinkProps {
    children?: ReactNode;
    className?: string;
    icon?: IconType;
    href?: string;
    target: string;
}

const Link = ({ children, className, href, target, ...props }: LinkProps) => (
    <A href={href} target={target} className={className}>
        {props.icon && (
            <IconWrapper>
                <props.icon />
            </IconWrapper>
        )}
        {children}
    </A>
);

export default Link;
export type { LinkProps };
