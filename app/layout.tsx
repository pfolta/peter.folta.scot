import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

import { Footer } from "@/components";
import packageInfo from "@/package.json";
import profile from "@/profile.json";
import { GlobalStyle, StyledComponentsRegistry } from "@/styles";

const metadata: Metadata = {
    title: profile.name,
    description: packageInfo.description,
    authors: packageInfo.author,
    openGraph: {
        type: "website",
        url: packageInfo.homepage,
        title: profile.name,
        description: packageInfo.description,
        siteName: profile.name
    }
};

const viewport: Viewport = {
    viewportFit: "cover"
};

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
    <html lang="en">
        <body>
            <StyledComponentsRegistry>
                <GlobalStyle />
                {children}
                <Footer />
            </StyledComponentsRegistry>
        </body>
    </html>
);

export default Layout;
export { metadata, viewport };
