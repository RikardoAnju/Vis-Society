# 📁 Project Structure Guide

## Directory Organization

```
vis-society/
├── src/                          # Source code
│   ├── app/                      # Next.js App Router pages & layout
│   │   ├── layout.tsx            # Root layout component
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Global styles (moved to /styles)
│   │
│   ├── components/               # Reusable React components
│   │   ├── ui/                   # UI components (buttons, cards, etc.)
│   │   ├── layout/               # Layout components (header, footer, navbar)
│   │   └── sections/             # Page sections (hero, about, etc.)
│   │
│   ├── lib/                      # Utilities & helper functions
│   │   ├── color.ts              # Color palette constants
│   │   ├── file.ts               # File utilities
│   │   ├── cn.ts                 # Classname utility
│   │   └── index.ts              # Export barrel file
│   │
│   ├── styles/                   # Global styles
│   │   └── globals.css           # Global CSS
│   │
│   ├── types/                    # TypeScript type definitions
│   │   └── index.ts              # Shared types & interfaces
│   │
│   └── constants/                # Application constants
│       └── index.ts              # Site config, navigation, data
│
├── public/                       # Static assets
│   ├── img/                      # Images
│   ├── icons/                    # Icon assets
│   └── fonts/                    # Custom fonts
│
├── .env.example                  # Environment variables template
├── tsconfig.json                 # TypeScript configuration with path aliases
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies
└── README.md                     # Project documentation

```

## Path Aliases

Use these convenient path aliases in imports:

```typescript
// Instead of: import { cn } from '../../../lib/cn';
import { cn } from '@lib/cn';

// Instead of: import type { NavLink } from '../../../types';
import type { NavLink } from '@types/index';

// Instead of: import { NAV_LINKS } from '../../../constants';
import { NAV_LINKS } from '@constants/index';

// Components
import Button from '@components/ui/Button';
import Header from '@components/layout/Header';
import HeroSection from '@components/sections/Hero';
```

## Available Aliases

- `@/*` - `./src/*` - Main source directory
- `@components/*` - `./src/components/*` - Components
- `@lib/*` - `./src/lib/*` - Utilities & helpers
- `@app-types/*` - `./src/types/*` - Type definitions
- `@styles/*` - `./src/styles/*` - Stylesheets
- `@constants/*` - `./src/constants/*` - Constants

## File Organization Best Practices

### Components Folder
- **ui/** - Pure, reusable UI components (Button, Card, Modal, etc.)
- **layout/** - Layout components (Header, Footer, Navigation, Sidebar)
- **sections/** - Full-page sections/features (Hero, About, Services, etc.)

### Library Folder
- Group related utilities into files (color.ts, file.ts, etc.)
- Export everything from index.ts for easy importing
- Keep functions pure and testable

### Constants Folder
- Site-wide configuration (SITE_NAME, SITE_URL)
- Navigation links
- Static data (testimonials, team, services)
- API endpoints

### Types Folder
- Define all shared TypeScript types and interfaces
- Keep them organized and well-documented
- Export from index.ts

## Quick Start

1. **Create a new component:**
   ```bash
   # Create UI component
   touch src/components/ui/MyButton.tsx
   ```

2. **Import utilities:**
   ```typescript
   import { colors } from '@lib/color';
   import { cn } from '@lib/cn';
   ```

3. **Use constants:**
   ```typescript
   import { NAV_LINKS, SITE_NAME } from '@constants/index';
   ```

4. **Define types:**
   ```typescript
   import type { NavLink } from '@types/index';
   ```
