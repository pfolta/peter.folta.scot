import { execSync } from "child_process";
import { NextConfig } from "next";
import strftime from "strftime";

const DATE_FORMAT = "%b %-d, %Y at %-I:%M %p %z";
const NOW = new Date();

/** Checks if Git working tree is dirty. */
const isDirty = () => {
    const status = execSync("git status -s").toString().trim();
    return status.length !== 0;
};

/** Returns the last Git commit date or the current date if the working tree is dirty formatted using `DATE_FORMAT`. */
const lastUpdated = () => {
    return isDirty() ? strftime(DATE_FORMAT, NOW) : execSync(`git show -s --format=%cd --date=format:'${DATE_FORMAT}'`).toString().trim();
};

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
