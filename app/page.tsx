"use client";

import styled from "styled-components";

import profiles from "@/resources/profiles.json";

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

            <h2>Profiles</h2>

            {profiles.map((group) => (
                <section key={group.id}>
                    <h3>{group.name}</h3>

                    <ul>
                        {group.links.map((link) => (
                            <li key={link.id}>
                                <a href={link.url} target="_blank">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    );
}
