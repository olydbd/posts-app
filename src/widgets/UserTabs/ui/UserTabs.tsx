import { FileText, ImageIcon, Users } from 'lucide-react';
import { NavLink } from 'react-router';

import type { NavLinkItem } from '../model/types';
import styles from './UserTabs.module.scss';

const navLinks: NavLinkItem[] = [
  { to: '/posts', label: 'Posts', icon: <FileText className={styles.navIcon} /> },
  { to: '/users', label: 'Users', icon: <Users className={styles.navIcon} /> },
  { to: '/albums', label: 'Albums', icon: <ImageIcon className={styles.navIcon} /> },
];

export const UserTabs = () => {
  return (
    <div className={styles.navLinks}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        >
          {link.icon}
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};
