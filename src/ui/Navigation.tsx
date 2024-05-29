import styles from '../styles/ui/Navigation.module.css';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link to='/' className={styles.logo}>
        <img src='/nasa-logo.svg' alt='nasa logo' draggable={false} />
        <p>Astronomy Picture</p>
      </Link>

      <NavLink to='/gallery' className={styles.gallery}>
        Gallery
      </NavLink>
    </nav>
  );
}

export default Navigation;
