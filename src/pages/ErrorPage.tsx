import styles from '../styles/pages/ErrorPage.module.css';

function ErrorPage({ error }: { error?: string }) {
  return (
    <div className={styles.container}>
      <p>{error}</p>

      <button onClick={() => location.reload()}>Try Again</button>
    </div>
  );
}

export default ErrorPage;
