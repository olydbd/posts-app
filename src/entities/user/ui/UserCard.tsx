import { Link } from 'react-router';

import type { User } from '../model/types';
import styles from './UserCard.module.scss';

export const UserCard = ({ name, username, email, phone, website }: User) => {
  return (
    <Link to="/" className={styles.card}>
      <h3 className={styles.name}>{name}</h3>

      <p className={styles.username}>@{username}</p>

      <div className={styles.info}>
        <p>
          <span>Email:</span> {email}
        </p>
        <p>
          <span>Phone:</span> {phone}
        </p>
        <p>
          <span>Website:</span> {website}
        </p>
      </div>
    </Link>
  );
};
