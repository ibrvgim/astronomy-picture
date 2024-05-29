import styles from '../styles/components/MiniSpinner.module.css';

function MiniSpinner() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default MiniSpinner;
