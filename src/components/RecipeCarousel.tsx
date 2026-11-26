import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { recipes, thumbPath } from '../data/recipes';
import { RecipeImage } from './RecipeImage';
import styles from './RecipeCarousel.module.css';

const VISIBLE = 3;
const SWIPE_PX = 40;
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

  const drag = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, y: e.clientY };
    swiped.current = false;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const from = drag.current;
    drag.current = null;
    if (!from) return;
    const dx = e.clientX - from.x;
    if (Math.abs(dx) >= SWIPE_PX && Math.abs(dx) > Math.abs(e.clientY - from.y)) {
      swiped.current = true;
      go(dx < 0 ? 1 : -1);
    }
  };

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
      <div
        className={styles.viewport}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (drag.current = null)}
        onClickCapture={(e) => {
          if (swiped.current) {
            e.preventDefault();
            e.stopPropagation();
            swiped.current = false;
          }
        }}
      >
        <ul
          className={styles.track}
          style={{ transform: `translateX(-${(start * 100) / VISIBLE}%)` }}
        >
          {recipes.map((r, i) => {
            const visible = i >= start && i < start + VISIBLE;
            return (
              <li key={r.id} className={styles.slide}>
                <Link
                  draggable={false}
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
