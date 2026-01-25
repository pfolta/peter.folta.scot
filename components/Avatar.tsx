"use client";

import styled from "styled-components";

interface AvatarProps {
    $size: number;
}

const Avatar = styled.img<AvatarProps>`
    border-radius: 50%;
    border: 0.25rem black solid;

    display: block;

    width: ${({ $size }) => $size}px;
    max-width: 100%;
    height: auto;
`;

export default Avatar;
export type { AvatarProps };
