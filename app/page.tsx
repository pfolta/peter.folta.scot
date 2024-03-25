"use client";

import styled from "styled-components";

const Explanation = styled.p`
  color: #aaaaaa;
  font-style: italic;
`;

export default function Home() {
  return (
    <main>
      <h1>Peter Folta</h1>

      <p>This is where it all begins.</p>

      <p>Automatically deployed using GitHub Actions.</p>

      <Explanation>First version built using NextJS.</Explanation>
    </main>
  );
}
