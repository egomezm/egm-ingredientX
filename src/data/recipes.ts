import data from './recipes.json';

export interface RecipeIngredient {
  item: string;
  measure: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  img_src_path: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
}

export const recipes: Recipe[] = data;

export function getRecipe(id: string | null): Recipe | undefined {
  if (id === null) return undefined;
  return recipes.find((r) => String(r.id) === id);
}

export function thumbPath(path: string): string {
  return path.replace('/recipes/', '/recipes/thumbs/');
}

export function assetUrl(path: string): string {
  const url = `${import.meta.env.BASE_URL}${path}`;
  // Version query forces browsers to refetch updated assets after each release.
  return `${url}?v=${__APP_VERSION__}`;
}
