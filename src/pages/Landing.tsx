import { Link } from 'react-router-dom';
import { assetUrl } from '../data/recipes';
import styles from './Landing.module.css';

export function Landing() {
  return (
    <section className={styles.landing}>
      <img
        className={styles.label}
        src={assetUrl('images/ingredient-x-label.png')}
        alt="Ingredient X by Lalo, spice blend label"
      />
      <div className={styles.copy}>
        <p className={styles.kicker}>One blend · Endless possibilities</p>
        <h1>
          Ingredient <em>X</em>
        </h1>
        <p className={styles.lead}>
          A seasoning blend of <strong>Ingredient X1</strong>, <strong>Ingredient X2</strong>,{' '}
          <strong>Ingredient X3</strong> and <strong>Ingredient X4</strong>.
        </p>
        <p>
          Use it as a dry rub or seasoning mix, or stir it into olive oil or balsamic glaze for a
          bold, aromatic finish. Fast, high-flavor, minimal steps.
        </p>
        <p>
          Pick a recipe from the menu above to see how <strong className={styles.lalo}>Lalo</strong>{' '}
          puts Ingredient X to work.
        </p>
        <p>
          Want to know what Ingredient X is made of, and how? <Link to="/about">Click here.</Link>
        </p>
      </div>
      <div className={styles.spices} aria-hidden="true">
        <span className={styles.rule} />
        <img src={assetUrl('images/spices.png')} alt="" />
        <span className={styles.rule} />
      </div>
    </section>
  );
}
