import { Button } from '@shared/ui/Button';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <p>Posts App Header</p>
          <Button>About Project</Button>
        </div>
      </div>
    </header>
  );
};
