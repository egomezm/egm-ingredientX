import { assetUrl } from '../data/recipes';
import styles from './SpicesBanner.module.css';

export function SpicesBanner() {
  return (
    <div className={styles.spices} aria-hidden="true">
      <span className={styles.rule} />
      <img src={assetUrl('images/spices.png')} alt="" />
      <span className={styles.rule} />
    </div>
  );
}
