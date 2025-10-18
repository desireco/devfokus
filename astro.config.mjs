import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@inox-tools/sitemap-ext";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { analyzer } from "vite-bundle-analyzer";
import { env } from "./src/env";

export default defineConfig({
  server: {
    // This will allow all hosts to be used in development. Not only localhost.
    allowedHosts: true,
  },
  trailingSlash: "never",
  output: "server",
  image: {
    domains: ["public-files.gumroad.com"],
  },
  adapter: netlify({
    imageService: true,
  }),
  site: env().SITE_URL,
  markdown: {
    rehypePlugins: [rehypeSanitize(defaultSchema)],
  },
  integrations: [
    sitemap({
      includeByDefault: true,
    }),
    mdx({
      rehypePlugins: [rehypeSanitize(defaultSchema)],
    }),
    react({
      include: [
        "**/components/image-viewer.tsx",
        "**/components/slide/slide-viewer.tsx",
      ],
    }),
  ],
  vite: {
    plugins: [
      tailwindcss(),
      process.env.ANALYZE &&
        analyzer({
          analyzerMode: "static",
          reportFilename: "dist/bundle-report.html",
          openAnalyzer: false,
        }),
    ].filter(Boolean),
    build: {
      chunkSizeWarningLimit: 1000, // Increase warning limit to 1MB
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Split highlight.js into its own chunk
            if (id.includes("highlight.js") || id.includes("highlight.esm")) {
              return "highlight";
            }
            // Split reveal.js and its plugins
            if (id.includes("reveal.js")) {
              return "reveal";
            }
            // Split React and related packages
            if (id.includes("react") || id.includes("react-dom")) {
              return "react";
            }
            // Split UI libraries
            if (
              id.includes("lucide-react") ||
              id.includes("clsx") ||
              id.includes("tailwind-merge")
            ) {
              return "ui";
            }
            // Split animation libraries
            if (id.includes("animejs")) {
              return "animation";
            }

          },
        },
      },
    },
  },
  security: {
    checkOrigin: false,
  },
});
