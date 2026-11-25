# Ingredient-x

Recipes featuring "Ingredient X" by Lalo. Static React + TypeScript site backed by Supabase.

## Develop

```sh
cp .env.example .env   # fill in Supabase URL and anon key
npm install
npm run dev
```

## Scripts

`npm run lint`, `npm test`, `npm run build` (output in `dist/`), `npm run preview`.

## Deploy

Push to `main`; GitHub Actions builds and publishes to GitHub Pages at
`/egm-ingredientX/`. Set repo variable `VITE_SUPABASE_URL` and secret
`VITE_SUPABASE_ANON_KEY`. See `Docs/ingredientx-plan.md` for the table SQL.
