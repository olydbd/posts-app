import { Home, RefreshCcw } from 'lucide-react';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';

import { Button } from '../Button';
import styles from './Fallback.module.scss';

export const Fallback = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let title = 'Unknown error';
  let description = 'An unexpected error occurred. Please try again.';

  if (isRouteErrorResponse(error)) {
    title = `HTTP Error: ${error.status} ${error.statusText}`;
    description = `${error.data}`;
  } else if (error instanceof Error) {
    title = 'Something went wrong :(';
    description = `${error.message}`;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.error}>Error</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <Button onClick={() => window.location.reload()} className={styles.reloadButton}>
              <RefreshCcw />
              Try Again
            </Button>
            <Button onClick={() => navigate('/')} className={styles.backButton}>
              <Home />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
