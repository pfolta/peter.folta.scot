"use client";

import styled from "styled-components";

import { Avatar, Container, Link } from "@/components";
import * as Icon from "@/components/Icon";
import { email, location, name } from "@/profile.json";
import { links } from "@/resources";
import { screenLarge, screenSizeMediaQuery } from "@/styles";

const StyledLink = styled(Link)`
    display: block;
`;

const StyledAmazonIcon = styled(Icon.Amazon)`
    margin-right: 0.25em;
    vertical-align: -0.29em;
`;

const LinkGrid = styled(Container)`
    display: grid;
    gap: 1rem;

    ${screenSizeMediaQuery(screenLarge)} {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
`;

const Home = () => {
    return (
        <main>
            <Container as="section">
                <Avatar src="images/me.jpg" alt={`Photo of ${name}`} $size={192} />

                <h1>{name}</h1>

                <p>
                    Senior Software Engineer at{" "}
                    <Link href="https://www.amazon.jobs/en/locations/edinburgh-scotland" $color="#fe9900">
                        <StyledAmazonIcon />
                        Amazon
                    </Link>
                </p>

                <p>
                    <Icon.MapMarker />
                    {location}
                </p>

                <p>
                    <StyledLink href={`mailto:${email}`}>
                        <Icon.Email />
                        {email}
                    </StyledLink>
                    <StyledLink href="/vcard.vcf">
                        <Icon.AddressCard />
                        Contact vCard
                    </StyledLink>
                </p>
            </Container>

            <LinkGrid>
                {links.map((group) => (
                    <section key={group.id}>
                        <h3>
                            <group.icon />
                            {group.name}
                        </h3>

                        {group.links.map((link) => (
                            <StyledLink key={link.url} href={link.url} $color={link.color}>
                                <link.icon />
                                {link.name}
                            </StyledLink>
                        ))}
                    </section>
                ))}
            </LinkGrid>
        </main>
    );
};

export default Home;
