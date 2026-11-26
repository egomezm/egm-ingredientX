# Ingredient-x plan

A static site showcasing recipes that use "Ingredient X" by Lalo: a seasoning blend of Italian
seasoning, lemon pepper, onion and garlic.

## Stack

- Vite + React + TypeScript, built to a static bundle (`dist/`)
- Hosted on GitHub Pages on the custom domain ingredient-x.egmzone.com (CNAME to egomezm.github.io); HashRouter avoids 404 fallbacks
- No backend: recipes come from `src/data/recipes.json`
- React state only; CSS modules; ESLint + Prettier; Vitest + Testing Library
- GitHub Actions: lint, test, build, deploy to Pages

## Versioning

Major.Minor.Patch from `package.json`, shown in a small footer. Current: 0.6.2.

## Site

- Main navigation (Home, Recipes) plus a recipe carousel under it: 3 cards visible, arrow handles
  slide the list left/right with animation.
- Selecting a card navigates to `#/?recipe=<id>`, re-rendering the page as new (fade-in, scroll to
  top). The URL is bookmarkable; unknown ids show a not-found message.
- Landing page (no `recipe` param): the Ingredient X label (transparent PNG with the label's
  shape) and the blend description.
- Theme: light by default (warm cream, gold accents, Ingredient X red), with a header toggle to a
  dark theme saved in localStorage; Playfair Display + Inter.
- The carousel is compact (max 520px wide, centered, phone friendly) and uses small thumbnails.

## Recipe data

`id`, `title`, `description`, `img_src_path`, `ingredients[{item, measure}]`, `instructions[]`.
Images (generated) live in `public/images/recipes/` with 360px thumbnails in `thumbs/` for the menu; a branded placeholder shows if one is missing.
Eleven recipes: green salad, foil-packet potatoes and onions, grilled zucchini, sheet-pan chicken, roasted
cauliflower, shrimp skewers, fries/wedges, sausage & veggies, garlic bread, pasta toss.

## Assets

`public/images/ingredient-x-label.png` (transparent outside the black border, white inner label),
`public/logo.png`, `favicon.png` and `favicon-32.png` (the "Ingredient X" lettering and red X on a transparent square with a soft gray glow, readable on light and dark), and `public/images/spices.png` (spices from the label, background removed) shown at the bottom of every page.

## Structure

`src/data`, `src/components` (header, carousel, footer, image), `src/pages` (landing, recipe),
`src/styles`.

## About page

`/about` (HashRouter route) tells the playful origin story of Ingredient X, explains the name (a family recipe that cannot be shared), and shows a transparent portrait of Lalo (`public/images/lalo.png`) with a contact message. The landing page links to it and the main menu has an About item.

The spices banner (`SpicesBanner`) is rendered by `App` above the footer, so it appears on every page, including future ones.

Recipe images are requested with a `?v=<app version>` query (see `assetUrl`) so browsers refetch updated photos after each release. Recipe ids are sequential; "Green Salad X" is id 1.
