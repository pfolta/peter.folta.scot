import { execSync } from "child_process";
import { NextConfig } from "next";

const NOW = Date.now();

/** Checks if Git working tree is dirty. */
const isGitDirty = () => execSync("git status -s").toString().trim().length > 0;

/** Returns the last Git commit date or the current date if the working tree is dirty formatted using `DATE_FORMAT`. */
const lastUpdated = () => (isGitDirty() ? NOW : execSync(`git show -s --format=%ct'`)).toString().trim();

const nextConfig: NextConfig = {
    env: {
        LAST_UPDATED: lastUpdated()
    },
    eslint: {
        // We run ESLint separately as part of the `npm run lint` script.
        ignoreDuringBuilds: true
    },
    compiler: {
        styledComponents: true
    },
    images: {
        unoptimized: true
    },
    output: "export",
    reactStrictMode: true,
    trailingSlash: true
};

export default nextConfig;
