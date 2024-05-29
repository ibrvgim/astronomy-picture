import styles from '../styles/pages/Layout.module.css';
import { Outlet } from 'react-router-dom';
import Navigation from '../ui/Navigation';

function Layout() {
  return (
    <main>
      <Navigation />
      <section className={styles.section}>
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
