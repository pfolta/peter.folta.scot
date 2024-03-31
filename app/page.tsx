"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAddressCard, FaAmazon, FaEnvelope } from "react-icons/fa6";
import styled from "styled-components";

import { Avatar, Container, Icon, Link } from "@/components";
import packageInfo from "@/package.json";
import profiles from "@/resources/profiles";

const StyledLink = styled(Link)`
    display: block;
`;

const StyledAmazonIcon = styled(Icon(FaAmazon))`
    vertical-align: -0.29em;
`;

const MapIcon = Icon(FaMapMarkerAlt);
const EmailIcon = Icon(FaEnvelope);
const VCardIcon = Icon(FaAddressCard);

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
                    <MapIcon />
                    Edinburgh, United Kingdom
                </p>

                <p>
                    <StyledLink href={`mailto:${author.email}`}>
                        <EmailIcon />
                        {author.email}
                    </StyledLink>
                    <StyledLink href="/vcard.vcf">
                        <VCardIcon />
                        Contact vCard
                    </StyledLink>
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
