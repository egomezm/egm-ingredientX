import { useState } from 'react';
import { Link } from 'react-router-dom';
import { recipes, thumbPath } from '../data/recipes';
import { RecipeImage } from './RecipeImage';
import styles from './RecipeCarousel.module.css';

const VISIBLE = 3;
const MAX_START = Math.max(0, recipes.length - VISIBLE);

function startFor(activeId: string | null): number {
  const idx = recipes.findIndex((r) => String(r.id) === activeId);
  if (idx < 0) return 0;
  return Math.min(Math.max(idx - 1, 0), MAX_START);
}

export function RecipeCarousel({ activeId }: { activeId: string | null }) {
  const [start, setStart] = useState(() => startFor(activeId));
  const [seenId, setSeenId] = useState(activeId);

  // Bring the selected recipe into view when the URL changes (e.g. a bookmarked link).
  if (seenId !== activeId) {
    setSeenId(activeId);
    const idx = recipes.findIndex((r) => String(r.id) === activeId);
    if (idx >= 0 && (idx < start || idx >= start + VISIBLE)) setStart(startFor(activeId));
  }

  const go = (delta: number) => setStart((s) => Math.min(Math.max(s + delta, 0), MAX_START));

  return (
    <section className={styles.carousel} aria-label="Recipe menu">
      <button
        type="button"
        className={styles.arrow}
        onClick={() => go(-1)}
        disabled={start === 0}
        aria-label="Previous recipes"
      >
        ‹
      </button>
      <div className={styles.viewport}>
        <ul
          className={styles.track}
          style={{ transform: `translateX(-${(start * 100) / VISIBLE}%)` }}
        >
          {recipes.map((r, i) => {
            const visible = i >= start && i < start + VISIBLE;
            return (
              <li key={r.id} className={styles.slide}>
                <Link
                  to={`/?recipe=${r.id}`}
                  className={`${styles.card} ${String(r.id) === activeId ? styles.active : ''}`}
                  tabIndex={visible ? 0 : -1}
                  aria-current={String(r.id) === activeId ? 'page' : undefined}
                >
                  <span className={styles.thumb}>
                    <RecipeImage src={thumbPath(r.img_src_path)} alt="" />
                  </span>
                  <span className={styles.title}>{r.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        type="button"
        className={styles.arrow}
        onClick={() => go(1)}
        disabled={start >= MAX_START}
        aria-label="Next recipes"
      >
        ›
      </button>
    </section>
  );
}
