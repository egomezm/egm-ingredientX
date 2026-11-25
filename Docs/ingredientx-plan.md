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

Major.Minor.Patch from `package.json`, shown in a small footer. Current: 0.2.0.

## Site

- Main navigation (Home, Recipes) plus a recipe carousel under it: 3 cards visible, arrow handles
  slide the list left/right with animation.
- Selecting a card navigates to `#/?recipe=<id>`, re-rendering the page as new (fade-in, scroll to
  top). The URL is bookmarkable; unknown ids show a not-found message.
- Landing page (no `recipe` param): the Ingredient X label (transparent PNG with the label's
  shape) and the blend description.
- Theme: dark charcoal, warm gold accents, Ingredient X red; Playfair Display + Inter.

## Recipe data

`id`, `title`, `description`, `img_src_path`, `ingredients[{item, measure}]`, `instructions[]`.
Images live in `public/images/recipes/`; a branded placeholder shows if one is missing.
Ten starter recipes: foil-packet potatoes and onions, grilled zucchini, sheet-pan chicken, roasted
cauliflower, shrimp skewers, fries/wedges, sausage & veggies, garlic bread, pasta toss.

## Assets

`public/images/ingredient-x-label.png` (transparent outside the black border, white inner label),
`public/favicon.png` and `favicon-32.png` (the red X on transparent).

## Structure

`src/data`, `src/components` (header, carousel, footer, image), `src/pages` (landing, recipe),
`src/styles`.
