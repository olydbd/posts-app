import { NavLink } from 'react-router';

import { navLinks } from '../model/navLinks';
import styles from './UserTabs.module.scss';

export const UserTabs = () => {
  return (
    <div className={styles.navLinks}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};
