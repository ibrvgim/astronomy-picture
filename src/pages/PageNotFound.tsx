import { useNavigate } from 'react-router-dom';
import styles from '../styles/pages/PageNotFound.module.css';
import Navigation from '../ui/Navigation';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <Navigation />
      <div className={styles.container}>
        <p>Sorry, page not found!</p>

        <button onClick={() => navigate('/', { replace: true })}>
          Go Home
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
