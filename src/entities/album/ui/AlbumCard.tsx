import { Link } from 'react-router';

import type { Album } from '../model/types';
import styles from './AlbumCard.module.scss';

export const AlbumCard = ({ id, title }: Pick<Album, 'id' | 'title'>) => {
  return (
    <Link to={`/albums/${id}/photos`} className={styles.card}>
      <span className={styles.index}>Album #{id}</span>
      <p className={styles.title}>{title}</p>
    </Link>
  );
};
