import { ThemeSwitcher } from '@features/ThemeSwitcher';
import { Button } from '@shared/ui/Button';
import { Modal } from '@shared/ui/Modal';
import { UserTabs } from '@widgets/UserTabs';
import { useState } from 'react';
import { Link } from 'react-router';

import styles from './Header.module.scss';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            Posts App
          </Link>

          <UserTabs />

          <div className={styles.buttons}>
            <ThemeSwitcher />

            <Button onClick={() => setOpen(true)}>About Project</Button>
          </div>

          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <Modal.Header>About project</Modal.Header>
            <Modal.Body>
              This is a React + TypeScript + Vite application for viewing posts and comments.
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </header>
  );
};
