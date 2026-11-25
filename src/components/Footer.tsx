import styles from './Footer.module.css';

export function Footer() {
  return <footer className={styles.footer}>v{__APP_VERSION__}</footer>;
}
