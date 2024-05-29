import styles from '../styles/pages/LoadingPage.module.css';

function LoadingPage() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}>&nbsp;</span>
    </div>
  );
}

export default LoadingPage;
