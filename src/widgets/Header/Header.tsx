import { ThemeSwitcher } from '@features/ThemeSwitcher';
import { Button } from '@shared/ui/Button';
import { Modal } from '@shared/ui/Modal';
import { UserTabs } from '@widgets/UserTabs';
import { Flower2, Info } from 'lucide-react';
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
            <div className={styles.logoIcon}>
              <Flower2 className={styles.logoIconSvg} />
            </div>
            <span className={styles.logoText}>Blossom</span>
          </Link>

          <nav>
            <UserTabs />
          </nav>

          <div className={styles.buttons}>
            <ThemeSwitcher />

            <Button className={styles.aboutButton} onClick={() => setOpen(true)}>
              <Info className={styles.aboutButtonIcon} />
              About Project
            </Button>
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
