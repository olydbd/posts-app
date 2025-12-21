import { Button } from '@shared/ui/Button';
import { AboutProject, Modal } from '@shared/ui/Modal';
import { useState } from 'react';

import styles from './Header.module.scss';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <p>Posts App Header</p>
          <Button onClick={() => setOpen(true)}>About Project</Button>

          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <AboutProject />
          </Modal>
        </div>
      </div>
    </header>
  );
};
