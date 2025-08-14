import type { NextConfig } from "next";

module.exports = {
    logging: {
        fetches: {
        fullUrl: true,
        },
    },
}

const nextConfig: NextConfig = {
    experimental: {
        ppr: 'incremental',
    },
};

export default nextConfig;
