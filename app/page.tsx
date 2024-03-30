"use client";

import styled from "styled-components";

import { Avatar, Link } from "@/components";
import profiles from "@/resources/profiles";

const StyledLink = styled(Link)`
    display: block;
`;

const Home = () => {
    return (
        <main>
            <Avatar src="images/me.jpg" alt="Photo of Peter" height={256} width={256} />

            <h1>Peter Folta</h1>

            <h2>Profiles</h2>

            {profiles.map((group) => (
                <section key={group.id}>
                    <h3>{group.name}</h3>

                    {group.links.map((link) => (
                        <StyledLink key={link.url} href={link.url} target="_blank" icon={link.icon}>
                            {link.name}
                        </StyledLink>
                    ))}
                </section>
            ))}
        </main>
    );
};

export default Home;
