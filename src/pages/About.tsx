import { assetUrl } from '../data/recipes';
import styles from './About.module.css';

export function About() {
  return (
    <article className={styles.about}>
      <p className={styles.kicker}>The story</p>
      <h1>
        About Ingredient <em>X</em>
      </h1>

      <div className={styles.story}>
        <p>
          Legend has it that Ingredient X was born on a lazy Sunday when Lalo opened the pantry,
          found four half-empty jars and absolutely no plan. In a moment of either genius or hunger,
          he dumped them all into one bowl, gave it a shake and rubbed it on whatever was closest.
          The potatoes never saw it coming.
        </p>
        <p>
          The first batch was far too strong. The neighbors came knocking, the cat stood guard by
          the oven, and my son asked for the "secret" before dessert. Lalo kept tweaking: a little
          more of this, a little less of that, until the kitchen smelled like a celebration and
          nobody could stop reaching for seconds.
        </p>
        <p className={styles.verdict}>
          So why is it called <strong>Ingredient X</strong>? Because it is my own recipe, and it has
          been in my family for years, and it cannot be shared.
        </p>
      </div>

      <aside className={styles.card}>
        <img src={assetUrl('images/lalo.png')} alt="Lalo, smiling" />
        <p>
          I'm not sharing the recipe of Ingredient X, but contact me and I'll make the arrangements
          to get you some more.
        </p>
        <span className={styles.sign}>— Lalo</span>
      </aside>
    </article>
  );
}
