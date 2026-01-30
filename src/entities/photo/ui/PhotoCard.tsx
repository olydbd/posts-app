import type { Photo } from '../model/types';
import styles from './PhotoCard.module.scss';

export const PhotoCard = ({ id, title }: Photo) => {
  return (
    <div className={styles.item}>
      <img src={`https://picsum.photos/seed/${id}/300/300`} alt={title} className={styles.image} />

      <div className={styles.overlay} />

      <div className={styles.info}>
        <a
          href={`https://picsum.photos/seed/${id}/300/300`}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {title}
        </a>
      </div>
    </div>
  );
};
