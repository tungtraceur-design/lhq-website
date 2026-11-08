import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig = {
  // Cache Components rejects the static route config a GitHub Pages export needs.
  cacheComponents: pagesBasePath === undefined,
  partialPrefetching: pagesBasePath === undefined,
  ...(pagesBasePath !== undefined
    ? {
        output: "export" as const,
        basePath: pagesBasePath,
        trailingSlash: true,
        images: { loader: "custom", loaderFile: "./image-loader.ts" },
      }
    : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
