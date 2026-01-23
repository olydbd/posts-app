import { ThemeSwitcher } from '@features/ThemeSwitcher';
import { Button } from '@shared/ui/Button';
import { Modal } from '@shared/ui/Modal';
import { UserTabs } from '@widgets/UserTabs';
import { Camera, FileText, Flower2, ImageIcon, Info, Users } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

import styles from './Header.module.scss';

const features = [
  { icon: <FileText />, title: 'Posts', description: 'Create, read, and interact with posts' },
  { icon: <Users />, title: 'Users', description: 'User profiles and social connections' },
  { icon: <ImageIcon />, title: 'Albums', description: 'Organize and share photo albums' },
  { icon: <Camera />, title: 'Photos', description: 'Beautiful photo galleries' },
];

const technologies = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'React Router' },
  { name: 'Redux Toolkit' },
  { name: 'SCSS' },
];

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
            <Modal.Header>
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>About This Project</h3>
                <p className={styles.modalDescription}>A modern social media application</p>
              </div>
            </Modal.Header>
            <Modal.Body>
              <div className={styles.modalBody}>
                <div className={styles.features}>
                  <h4 className={styles.modalBodyTitle}>Features</h4>
                  <div className={styles.featuresGrid}>
                    {features.map((feature) => (
                      <div key={feature.title} className={styles.featureCard}>
                        <span className={styles.featureIcon}>{feature.icon}</span>
                        <div>
                          <p className={styles.featureTitle}>{feature.title}</p>
                          <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.stack}>
                  <h4 className={styles.modalBodyTitle}>Tech Stack</h4>
                  <div className={styles.stackList}>
                    {technologies.map((tech) => (
                      <span key={tech.name} className={styles.techBadge}>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className={styles.modalFooter}>
                <p>
                  This project is a full-featured social media application built with modern web
                  technologies. It demonstrates best practices in React development, state
                  management with Redux Toolkit, type-safe code with TypeScript, and beautiful
                  styling with SCSS.
                </p>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </header>
  );
};
