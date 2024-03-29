import type { Metadata } from "next";
import { ReactNode } from "react";

import { Footer } from "@/components";
import packageInfo from "@/package.json";
import { GlobalStyle, StyledComponentsRegistry } from "@/styles";

const title = "Peter Folta";

const metadata: Metadata = {
    title,
    description: packageInfo.description,
    authors: packageInfo.author,
    openGraph: {
        type: "website",
        url: packageInfo.homepage,
        title,
        description: packageInfo.description,
        siteName: title
    }
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
export { metadata };
