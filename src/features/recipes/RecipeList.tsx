import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { listRecipes } from '../../api/recipes';
import styles from './Recipes.module.css';

export function RecipeList() {
  const { data, isLoading, error } = useQuery({ queryKey: ['recipes'], queryFn: listRecipes });

  if (isLoading) return <p>Loading recipes…</p>;
  if (error) return <p role="alert">Could not load recipes.</p>;
  if (!data?.length) return <p>No recipes yet.</p>;

  return (
    <ul className={styles.list}>
      {data.map((r) => (
        <li key={r.id} className={styles.card}>
          <Link to={`/recipes/${r.id}`}>{r.title}</Link>
          {r.description && <p>{r.description}</p>}
        </li>
      ))}
    </ul>
  );
}
