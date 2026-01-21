import { useGetUserByIdQuery } from '@entities/user';
import { ArrowRight, FolderOpen } from 'lucide-react';
import { Link } from 'react-router';

import type { Album } from '../model/types';
import styles from './AlbumCard.module.scss';

interface AlbumCardProps {
  album: Album;
}

export const AlbumCard = ({ album }: AlbumCardProps) => {
  const { id, title, userId } = album;
  const { data: user } = useGetUserByIdQuery(userId);

  return (
    <Link to={`/albums/${id}/photos`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <FolderOpen className={styles.iconImage} />
            </div>

            <div className={styles.arrow}>
              <ArrowRight className={styles.arrowIcon} />
            </div>
          </div>

          <div className={styles.body}>
            <h3 className={styles.title}>Album №{id}</h3>
            <p className={styles.description}>{title}</p>
          </div>

          <div className={styles.footer}>
            <div className={styles.meta}>
              <span className={styles.count}>#photos</span>
              <span className={styles.author}>{user?.name}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
