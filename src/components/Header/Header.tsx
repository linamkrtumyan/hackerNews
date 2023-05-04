import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.logoText}>HackerNews</p>
    </header>
  );
}

export default Header;
