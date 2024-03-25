import type { Metadata } from "next";

import packageInfo from "@/package.json";
import StyledComponentsRegistry from "@/lib/styled-components-registry";

export const metadata: Metadata = {
    title: "Peter Folta",
    description: packageInfo.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
