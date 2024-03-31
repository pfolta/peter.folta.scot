"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa6";
import styled from "styled-components";

import { Avatar, Container, Icon, Link } from "@/components";
import profiles from "@/resources/profiles";

const StyledLink = styled(Link)`
    display: block;
`;

const StyledAmazonIcon = styled(Icon(FaAmazon))`
    vertical-align: -0.29em;
`;

const MapIcon = Icon(FaMapMarkerAlt);

const Home = () => {
    return (
        <main>
            <Container as="section">
                <Avatar src="images/me.jpg" alt="Photo of Peter" width={192} />

                <h1>Peter Folta</h1>

                <p>
                    Senior Software Engineer at{" "}
                    <Link href="https://www.amazon.jobs/en/locations/edinburgh-scotland">
                        <StyledAmazonIcon />
                        Amazon
                    </Link>
                </p>

                <p>
                    <MapIcon />
                    Edinburgh, United Kingdom
                </p>
            </Container>

            <Container as="section">
                <h2>Profiles</h2>

                {profiles.map((group) => (
                    <section key={group.id}>
                        <h3>{group.name}</h3>

                        {group.links.map((link) => (
                            <StyledLink key={link.url} href={link.url}>
                                <link.icon />
                                {link.name}
                            </StyledLink>
                        ))}
                    </section>
                ))}
            </Container>
        </main>
    );
};

export default Home;
