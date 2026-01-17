import { Link } from 'react-router';

import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link to="/" className={styles.link}>
            Go to home
          </Link>
        </div>
      </div>
    </section>
  );
};
