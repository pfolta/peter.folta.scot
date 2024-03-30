"use client";

import styled from "styled-components";

const maxWidth = "1200px";
const defaultPadding = "1rem";

const Container = styled.div`
    padding-block: ${defaultPadding};
    padding-inline: calc((100vw - min(100vw - 2 * ${defaultPadding}, ${maxWidth})) / 2);
`;

export default Container;
