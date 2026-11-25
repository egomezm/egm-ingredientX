import { supabase } from './supabase';

export interface Recipe {
  id: string;
  title: string;
  description: string | null;
  instructions: string | null;
  ingredients: string[];
  created_at: string;
}

const TABLE = 'ingredientx_recipe';

export async function listRecipes(): Promise<Recipe[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as Recipe[];
}

export async function getRecipe(id: string): Promise<Recipe> {
  const { data, error } = await supabase.from(TABLE).select('*').eq('id', id).single();
  if (error) throw error;
  return data as Recipe;
}
