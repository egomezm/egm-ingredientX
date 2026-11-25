import { useEffect, useState } from 'react';
import styles from './Header.module.css';

type Theme = 'light' | 'dark';

function initialTheme(): Theme {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const next = theme === 'light' ? 'dark' : 'light';
  return (
    <button
      type="button"
      className={styles.theme}
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === 'light' ? '☾' : '☀'}
    </button>
  );
}
