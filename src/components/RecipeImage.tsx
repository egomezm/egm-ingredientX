import { useState } from 'react';
import { assetUrl } from '../data/recipes';
import styles from './RecipeImage.module.css';

export function RecipeImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={styles.fallback} role="img" aria-label={alt}>
        <img src={assetUrl('favicon.png')} alt="" />
      </div>
    );
  }
  return (
    <img className={styles.img} src={assetUrl(src)} alt={alt} onError={() => setFailed(true)} />
  );
}
