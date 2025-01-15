"use client";

import { JSX, SVGProps } from "react";
import { IconType as ReactIconType } from "react-icons";
import styled from "styled-components";

type SVGIconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;
type IconType = ReactIconType | SVGIconType;

const Icon = (icon: IconType) => styled(icon)`
    margin-right: 0.25em;
    vertical-align: -0.125em;

    height: 1em;
    width: 1em;
    stroke: currentColor;
    fill: currentColor;
`;

export default Icon;
export type { IconType };
