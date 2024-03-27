import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import styled from "styled-components";

const A = styled.a`
    text-decoration: none;
    color: black;

    &::after {
        content: "→";
        padding-left: 0.25rem;
        position: absolute;
        transition: padding 0.15s ease-in-out;
    }

    &:hover {
        text-decoration: underline;

        @media (prefers-reduced-motion: no-preference) {
            &::after {
                padding-left: 0.5rem;
            }
        }
    }

    &:focus {
        outline: none;
        text-decoration: underline;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-right: 0.25rem;

    height: 1rem;
    width: 1rem;
    vertical-align: -0.125em;
`;

interface LinkProps {
    children?: ReactNode;
    href?: string;
    target: string;
    icon?: IconDefinition;
}

const Link = ({ children, href, target, icon }: LinkProps) => {
    return (
        <A href={href} target={target}>
            {icon && <StyledFontAwesomeIcon icon={icon} />}
            {children}
        </A>
    );
};

export default Link;
