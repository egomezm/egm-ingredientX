import { Link, NavLink, useLocation } from 'react-router-dom';
import { assetUrl, recipes } from '../data/recipes';
import { ThemeToggle } from './ThemeToggle';
import styles from './Header.module.css';

export function Header({ hasRecipe }: { hasRecipe: boolean }) {
  const about = useLocation().pathname === '/about';
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand} aria-label="Ingredient X home">
        <img src={assetUrl('logo.png')} alt="Ingredient X" />
      </Link>
      <nav aria-label="Main navigation" className={styles.nav}>
        <NavLink to="/" end className={() => (hasRecipe || about ? '' : styles.current)}>
          Home
        </NavLink>
        <NavLink
          to={`/?recipe=${recipes[0].id}`}
          className={() => (hasRecipe ? styles.current : '')}
        >
          Recipes
        </NavLink>
        <NavLink to="/about" className={() => (about ? styles.current : '')}>
          About
        </NavLink>
        <ThemeToggle />
      </nav>
    </header>
  );
}
