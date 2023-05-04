import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
