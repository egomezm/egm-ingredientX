import type { Recipe } from '../data/recipes';
import { RecipeImage } from '../components/RecipeImage';
import styles from './RecipePage.module.css';

export function RecipePage({ recipe }: { recipe: Recipe }) {
  return (
    <article className={styles.recipe}>
      <div className={styles.hero}>
        <RecipeImage src={recipe.img_src_path} alt={recipe.title} />
      </div>
      <h1>{recipe.title}</h1>
      <p className={styles.description}>{recipe.description}</p>
      <div className={styles.columns}>
        <section>
          <h2>Ingredients</h2>
          <ul className={styles.ingredients}>
            {recipe.ingredients.map((i) => (
              <li key={i.item}>
                <span className={styles.measure}>{i.measure}</span>
                <span>{i.item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Instructions</h2>
          <ol className={styles.steps}>
            {recipe.instructions.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
