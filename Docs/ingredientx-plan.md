# Ingredient-x plan

A static site showcasing recipes that use "Ingredient X" by Lalo.

## Stack

- Vite + React + TypeScript, built to a static bundle (`dist/`)
- Hosted on GitHub Pages at `/egm-ingredientX/`; HashRouter avoids 404 fallbacks
- Supabase (`@supabase/supabase-js`, anon key + RLS) accessed client-side
- TanStack Query for data fetching; React state/context only
- CSS modules; ESLint + Prettier; Vitest + Testing Library
- GitHub Actions: lint, test, build, deploy to Pages

## Versioning

Major.Minor.Patch from `package.json`, shown in a small footer. Current: 0.1.0.

## Data

Table `ingredientx_recipe` (public read via RLS):

```sql
create table ingredientx_recipe (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  instructions text,
  ingredients text[] not null default '{}',
  created_at timestamptz not null default now()
);
alter table ingredientx_recipe enable row level security;
create policy "public read" on ingredientx_recipe for select using (true);
```

## Structure

`src/api` (Supabase client, recipe queries), `src/features/recipes` (list, detail),
`src/components` (footer), `src/styles`.

## Configuration

`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (see `.env.example`; set as Actions
variable/secret for deploys).
