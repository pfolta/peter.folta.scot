"use client";

import styled from "styled-components";

import { Avatar, Container, Link } from "@/components";
import * as Icon from "@/components/Icon";
import packageInfo from "@/package.json";
import { links } from "@/resources";

const StyledLink = styled(Link)`
    display: block;
`;

const StyledAmazonIcon = styled(Icon.Amazon)`
    vertical-align: -0.29em;
`;

const { author } = packageInfo;

const Home = () => {
    return (
        <main>
            <Container as="section">
                <Avatar src="images/me.jpg" alt={`Photo of ${author.name}`} width={192} />

                <h1>{author.name}</h1>

                <p>
                    Senior Software Engineer at{" "}
                    <Link href="https://www.amazon.jobs/en/locations/edinburgh-scotland">
                        <StyledAmazonIcon />
                        Amazon
                    </Link>
                </p>

                <p>
                    <Icon.MapMarker />
                    Edinburgh, United Kingdom
                </p>

                <p>
                    <StyledLink href={`mailto:${author.email}`}>
                        <Icon.Email />
                        {author.email}
                    </StyledLink>
                    <StyledLink href="/vcard.vcf">
                        <Icon.AddressCard />
                        Contact vCard
                    </StyledLink>
                </p>
            </Container>

            <Container as="section">
                <h2>Profiles</h2>

                {links.map((group) => (
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
