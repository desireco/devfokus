# devFokus

devFokus developer portal - An Astro site featuring multi-format content including knowledge cards, articles, and slide presentations.

## Features

- **Knowledge Cards**: Research summaries and insights
- **Articles**: Blog posts and long-form content
- **Slide Presentations**: Interactive slides with reveal.js
- **Search**: Pagefind-powered search with full-text indexing

## Tech Stack

- Astro 5 with SSR (Netlify deployment)
- React 19 with Radix UI and Lucide icons
- TailwindCSS 4
- Pagefind for static search indexing

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build search index
npm run build:search-index

# Code quality
npm run check
npm run fix

# Build for production
npm run build
```

### Note

The search index won't be automatically built during development. You need to run `npm run build:search-index` manually to generate the search index.

## Content Structure

- **Knowledge Cards**: `src/content/cards/` - Research summaries in Markdown
- **Blog Articles**: `src/content/blogs/` - Long-form content
- **Slide Presentations**: `src/content/slides/` - Markdown-based slides for reveal.js
