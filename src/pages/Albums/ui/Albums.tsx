import { AlbumCard, useGetAlbumsQuery } from '@entities/album';

import styles from './Albums.module.scss';

export const Albums = () => {
  const { data: albums, isError, isLoading } = useGetAlbumsQuery();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Albums</h2>

        {isError && <p>Error</p>}
        {isLoading && <p>Loading...</p>}

        {albums && (
          <div className={styles.albums}>
            {albums.map((album) => (
              <AlbumCard key={album.id} id={album.id} title={album.title} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
