import { AlbumCard, useGetAlbumsQuery } from '@entities/album';
import { ImageIcon } from 'lucide-react';

import styles from './Albums.module.scss';

export const Albums = () => {
  const { data: albums, isError, isLoading } = useGetAlbumsQuery();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <ImageIcon className={styles.badgeIcon} />
            <span className={styles.badgeText}>Photo Albums</span>
          </div>

          <h2 className={styles.title}>Browse Albums</h2>

          <p className={styles.subtitle}>Explore photo collections from our community members</p>
        </div>

        {isError && (
          <div className={styles.errorState}>
            <p className={styles.errorStateText}>Error</p>
          </div>
        )}
        {isLoading && (
          <div className={styles.loadingState}>
            <p className={styles.loadingStateText}>Loading albums...</p>
          </div>
        )}

        {albums && (
          <div className={styles.albums}>
            {albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
