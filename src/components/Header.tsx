import { Link, NavLink } from 'react-router-dom';
import { assetUrl, recipes } from '../data/recipes';
import { ThemeToggle } from './ThemeToggle';
import styles from './Header.module.css';

export function Header({ hasRecipe }: { hasRecipe: boolean }) {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img src={assetUrl('favicon.png')} alt="" />
        <span>
          Ingredient <em>X</em>
        </span>
      </Link>
      <nav aria-label="Main navigation" className={styles.nav}>
        <NavLink to="/" end className={() => (hasRecipe ? '' : styles.current)}>
          Home
        </NavLink>
        <NavLink
          to={`/?recipe=${recipes[0].id}`}
          className={() => (hasRecipe ? styles.current : '')}
        >
          Recipes
        </NavLink>
        <ThemeToggle />
      </nav>
    </header>
  );
}
