# Ingredient-x

Recipes featuring "Ingredient X" by Lalo. A fully static React + TypeScript site; recipes live in
`src/data/recipes.json`.

## Develop

```sh
npm install
npm run dev
```

## Add or edit recipes

Edit `src/data/recipes.json`. Each recipe has `id`, `title`, `description`, `img_src_path`
(relative to `public/`), `ingredients` (`item` + `measure`) and `instructions`. Put photos in
`public/images/recipes/`. A recipe is linked as `#/?recipe=<id>`.

## Scripts

`npm run lint`, `npm test`, `npm run build` (output in `dist/`), `npm run preview`.

## Deploy

Push to `main`; GitHub Actions builds and publishes to GitHub Pages on the custom domain ingredient-x.egmzone.com (CNAME to egomezm.github.io).
