/** @type {import('next').NextConfig} */
const nextConfig = {
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
