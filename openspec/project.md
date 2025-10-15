# Project Context

## Purpose
devFokus is a developer portal and content platform featuring multi-format content including knowledge cards, technical articles, and interactive slide presentations. The site serves as a hub for sharing research insights, technical knowledge, and educational content in a structured, searchable format.

## Tech Stack
- **Framework**: Astro 5 with SSR (Server-Side Rendering)
- **Frontend**: React 19 with TypeScript
- **Styling**: TailwindCSS 4 with Vite integration
- **UI Components**: Radix UI primitives, Lucide React icons
- **Content Management**: Astro Content Collections with Zod schemas
- **Search**: Pagefind for full-text search indexing
- **Presentations**: reveal.js for interactive slides
- **Animations**: Anime.js for UI animations
- **Deployment**: Netlify adapter with image optimization
- **Code Quality**: Biome for linting and formatting, Husky for git hooks

## Project Conventions

### Code Style
- **Formatting**: Biome with space indentation (2 spaces)
- **TypeScript**: Strict mode with strictNullChecks enabled
- **Imports**: Auto-organized imports, prefer import type for type-only imports
- **File Naming**: kebab-case for files, PascalCase for components
- **Path Aliases**: `@/*` maps to `src/*` for clean imports

### Architecture Patterns
- **Content-First**: Content-driven architecture using Astro Content Collections
- **Component-Based**: Modular React components with clear separation of concerns
- **Islands Architecture**: React components only where interactivity is needed
- **Schema-Driven Content**: Zod schemas validate all content metadata
- **SSR with Static Generation**: Hybrid rendering for optimal performance

### Testing Strategy
- **Type Safety**: TypeScript strict mode + Zod schemas for content validation
- **Build Validation**: Astro check + Biome check in CI/CD
- **Manual Testing**: Development server with hot reload
- **Bundle Analysis**: Vite bundle analyzer for optimization

### Git Workflow
- **Branching**: Feature branches from main
- **Commits**: Conventional commits (implicit from project structure)
- **Hooks**: Husky for pre-commit quality checks
- **Ignore**: Standard Astro/Node ignores plus build artifacts and search indexes

## Domain Context

### Content Types
- **Knowledge Cards**: Research summaries with customizable themes (blackWhite, etc.)
- **Blog Articles**: Long-form technical content with author attribution and tagging
- **Slide Presentations**: Interactive presentations using reveal.js with multiple themes

### Content Structure
- **Blogs**: Organized by year/month (`YYYY/MM/`) with markdown files
- **Cards**: Flat structure in `cards/` directory
- **Slides**: Flat structure with associated images in subdirectories
- **Metadata**: All content has structured frontmatter with Zod validation

### Key Features
- **Search**: Pagefind-powered full-text search with custom index building
- **Theming**: Multiple themes for cards and slides
- **Responsive**: Mobile-first design with TailwindCSS
- **Performance**: Code splitting, image optimization, bundle analysis

## Important Constraints
- **Search Index**: Must be built manually with `npm run build:search-index` during development
- **Image Domains**: Only allows images from `public-files.gumroad.com` and local assets
- **Chunk Size**: 1MB warning limit for bundle chunks
- **Security**: Origin checking disabled for development flexibility
- **Content Validation**: All content must pass Zod schema validation

## External Dependencies
- **Netlify**: Primary deployment platform with image service
- **Pagefind**: Search indexing service (static generation)
- **Vercel OG**: OpenGraph image generation
- **Gumroad**: External image hosting for content assets
- **Reveal.js**: Presentation framework (bundled locally)
