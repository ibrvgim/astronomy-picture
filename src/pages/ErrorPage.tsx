import styles from '../styles/pages/ErrorPage.module.css';
import { useRouteError } from 'react-router-dom';
import Navigation from '../ui/Navigation';
import { ErrorType } from '../types/types';

function ErrorPage() {
  const error = useRouteError() as ErrorType;

  return (
    <div>
      <Navigation />
      <div className={styles.container}>
        <p>{error.message}</p>

        <button onClick={() => location.reload()}>Try Again</button>
      </div>
    </div>
  );
}

export default ErrorPage;
