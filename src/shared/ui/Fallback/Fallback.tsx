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
        <div className={styles.card}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <Button onClick={() => navigate(-1)}>Go back</Button>
            <Button onClick={() => window.location.reload()}>Reload page</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
