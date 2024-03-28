import type { Metadata } from "next";
import { ReactNode } from "react";

import { Footer } from "@/components";
import packageInfo from "@/package.json";
import { GlobalStyle, StyledComponentsRegistry } from "@/styles";

const metadata: Metadata = {
    title: "Peter Folta",
    description: packageInfo.description
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
