# Lotus Rio Tour

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![CI](https://github.com/rcannabrava/lotusriotour/actions/workflows/ci.yml/badge.svg)

Official website of Lotus Rio Tour, a private tourism company in Rio de Janeiro founded and led by Patricia Cannabrava. The website showcases the available tours, customer testimonials, information about the guide, and a direct contact channel through WhatsApp.

## About the project

Patricia has been guiding tourists from all over the world for more than 10 years, speaking Portuguese, English, and Spanish fluently. The website was built to reflect the experience she provides: personalized, elegant, and hassle-free. Every tour is fully private, from hotel pickup to drop-off.

## Stack

- React 19 with TypeScript
- TanStack Start (SSR) and TanStack Router (file-based routing)
- TanStack Query for async state management
- Tailwind CSS v4 for styling
- Framer Motion for animations
- Tolgee for internationalization (PT-BR, EN, ES)
- Swiper for the testimonials carousel
- SEO metadata, Open Graph, and Twitter Cards configured per route through TanStack Router (`head()`)
- Cloudflare Workers as the production runtime
- Vite as the bundler

## Project structure

```txt
src/
  assets/          # Images and SVGs
  components/
    layout/        # Navbar, Footer, WhatsApp float button, LanguageSwitcher
    sections/      # Hero, About, Tours, WhyLotus, Testimonials, FAQ, CTA
  constants/       # Site constants (name, links, WhatsApp)
  data/            # Tours, testimonials, and FAQ data
  i18n/            # Tolgee configuration and language list
  lib/             # Utilities and error handling
  routes/          # Pages (file-based via TanStack Router)
  tests/           # Unit tests with Vitest
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Tests

```bash
npm run test
```

To run tests with coverage:

```bash
npm run test:coverage
```

## Code quality

```bash
# Lint
npm run lint

# Type checking
npm run typecheck

# Formatting
npm run format
```

The project uses Husky with lint-staged to automatically run linting and formatting checks before each commit.

## Supported languages

| Code  | Language   |
| ----- | ---------- |
| en    | English    |
| pt-BR | Portuguese |
| es-ES | Spanish    |

The language is automatically detected by the browser and stored using Tolgee's `LanguageStorage`. Users can also switch languages through the navbar selector.

## Available tours

- Rio Express (Christ the Redeemer + main attractions)
- Tailor-Made (custom itinerary)
- Rio Nature (Tijuca Forest and nature tours)
- Helicopter Tour
- Brazilian Passions (Carnival Experience and Maracanã)
- Boat Tour

Each tour includes a title, location, duration, and description managed through i18n.

## Direct contact

All call-to-action buttons on the website redirect users to [Patricia's WhatsApp](https://wa.me/5521971577557)

## Commit conventions

The project follows Conventional Commits:

- `feat:` new feature
- `fix:` bug fix
- `build:` build process changes
- `chore:` maintenance tasks
- `refactor:` code refactoring without behavior changes
- `docs:` documentation updates
- `test:` test creation or updates
