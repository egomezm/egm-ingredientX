import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getRecipe } from '../../api/recipes';
import styles from './Recipes.module.css';

export function RecipeDetail() {
  const { id = '' } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => getRecipe(id),
  });

  if (isLoading) return <p>Loading…</p>;
  if (error || !data) return <p role="alert">Recipe not found.</p>;

  return (
    <article className={styles.detail}>
      <Link to="/">← All recipes</Link>
      <h2>{data.title}</h2>
      {data.description && <p>{data.description}</p>}
      <h3>Ingredients</h3>
      <ul>
        {data.ingredients.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      {data.instructions && (
        <>
          <h3>Instructions</h3>
          <p>{data.instructions}</p>
        </>
      )}
    </article>
  );
}
