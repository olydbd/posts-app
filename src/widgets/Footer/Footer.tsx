import { Flower2, Heart } from 'lucide-react';
import { Link } from 'react-router';

import styles from './Footer.module.scss';

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Flower2 className={styles.logoIcon} />
            </div>
            <span className={styles.logoText}>Blossom Posts</span>
          </div>

          <nav className={styles.nav}>
            <Link to="#" className={styles.link}>
              Privacy
            </Link>
            <Link to="#" className={styles.link}>
              Terms
            </Link>
            <Link to="#" className={styles.link}>
              Contact
            </Link>
          </nav>

          <p className={styles.made}>
            Made with
            <Heart className={styles.iconHeart} />
            by the community
          </p>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Blossom Posts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
