# Ceiling Hub Premium - Workspace Structure

## Directory Tree

```
ceiling-hub-premium/
│
├── 📄 index.html
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 vite.config.js
├── 📄 tailwind.config.js
├── 📄 postcss.config.js
├── 📄 eslint.config.js
├── 📄 README.md
├── 📄 .gitignore
│
├── 📁 public/
│
├── 📁 src/
│   ├── 📄 main.jsx
│   ├── 📄 App.jsx
│   ├── 📄 App.css
│   ├── 📄 index.css
│   │
│   ├── 📁 components/
│   │   ├── 📁 layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Container.jsx
│   │   │
│   │   ├── 📁 ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── SectionTitle.jsx
│   │   │
│   │   ├── 📁 products/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductGallery.jsx
│   │   │   ├── ProductFeatures.jsx
│   │   │   └── ProductSearch.jsx
│   │   │
│   │   └── 📁 animations/
│   │       ├── FadeIn.jsx
│   │       └── SlideUp.jsx
│   │
│   ├── 📁 pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductPage.jsx
│   │   └── Support.jsx
│   │
│   ├── 📁 assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   ├── vite.svg
│   │   ├── 📁 images/
│   │   ├── 📁 products/
│   │   └── 📁 product/
│   │
│   ├── 📁 data/
│   │   └── products.js
│   │
│   ├── 📁 hooks/
│   │   └── useScrollReveal.js
│   │
│   └── 📁 config/
│       └── contact.js
│
└── 📁 node_modules/

```

## File Organization Summary

| Directory | Purpose | Files |
|-----------|---------|-------|
| **root** | Project configuration | vite, tailwind, postcss, eslint configs |
| **src/** | Source code | Entry points and main app |
| **src/components/** | Reusable UI components | 14 component files |
| **src/components/layout** | Layout components | Navbar, Footer, Container |
| **src/components/ui** | UI primitives | Button, Card, SectionTitle |
| **src/components/products** | Product-related components | Cards, grid, search, gallery |
| **src/components/animations** | Animation wrappers | FadeIn, SlideUp |
| **src/pages/** | Page components | Home, Products, ProductPage, Support |
| **src/assets/** | Static assets | Images, SVGs, media files |
| **src/data/** | Data files | Product data definitions |
| **src/hooks/** | React custom hooks | useScrollReveal |
| **src/config/** | Configuration files | contact info |

## Component Dependency Map

```
App.jsx
├── Home.jsx
│   ├── Navbar
│   └── Footer
├── Products.jsx
│   ├── Navbar
│   ├── ProductSearch
│   ├── ProductGrid
│   │   └── ProductCard
│   └── Footer
├── ProductPage.jsx
├── Support.jsx
└── Layout Components
    ├── Navbar.jsx
    ├── Footer.jsx
    └── Container.jsx
```

## Key Files

### Configuration Files
- `vite.config.js` - Vite bundler configuration
- `tailwind.config.js` - Tailwind CSS theme and customization
- `postcss.config.js` - PostCSS plugins (Tailwind, Autoprefixer)
- `eslint.config.js` - ESLint rules
- `package.json` - Dependencies and scripts

### Entry Points
- `index.html` - HTML template
- `src/main.jsx` - React entry point
- `src/App.jsx` - Main app component with routing

### Core Assets
- `src/assets/hero.png` - Hero image
- `src/assets/react.svg` - React logo
- `src/assets/vite.svg` - Vite logo

## Statistics

- **Total Component Files**: 14 JSX components
- **Total Data Files**: 2 (products.js, contact.js)
- **Total Hooks**: 1 custom hook
- **Total Pages**: 4 page components
- **Directory Depth**: Max 4 levels

## Technology Stack

- **Framework**: React 19.2.4
- **Router**: React Router DOM 7.14.1
- **Styling**: Tailwind CSS 3.4.4
- **Animation**: Framer Motion 12.38.0
- **Icons**: React Icons 5.6.0
- **Bundler**: Vite 8.0.4
- **Linting**: ESLint 9.39.4

---

Generated: April 19, 2026
