import {
  Building2,
  CheckSquare,
  FileText,
  Globe,
  ImageIcon,
  Mail,
  Phone,
  User as UserIcon,
} from 'lucide-react';
import { Link } from 'react-router';

import type { User } from '../model/types';
import styles from './UserCard.module.scss';

export const UserCard = ({ id, name, username, email, phone, website, company }: User) => {
  return (
    <Link to={`/users/${id}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <UserIcon className={styles.avatarIcon} />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.nameBlock}>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.username}>@{username}</p>
            </div>

            <div className={styles.company}>
              <Building2 className={styles.companyIcon} />
              <span className={styles.companyName}>{company.name}</span>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.infoItem}>
              <Mail className={styles.infoIcon} />
              <span>{email}</span>
            </div>

            <div className={styles.infoItem}>
              <Phone className={styles.infoIcon} />
              <span>{phone}</span>
            </div>

            <div className={`${styles.infoItem} ${styles.infoItemWide}`}>
              <Globe className={styles.infoIcon} />
              <span className={styles.website}>{website}</span>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <FileText className={styles.statIcon} />
                <span>posts</span>
              </div>

              <div className={styles.stat}>
                <ImageIcon className={styles.statIcon} />
                <span>albums</span>
              </div>

              <div className={styles.stat}>
                <CheckSquare className={styles.statIcon} />
                <span>todos</span>
              </div>
            </div>

            <span className={styles.view}>View Profile</span>
          </div>
        </div>
      </article>
    </Link>
  );
};
