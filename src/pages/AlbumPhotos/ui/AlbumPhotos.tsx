import { useGetAlbumPhotosByAlbumIdQuery } from '@entities/album';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useParams } from 'react-router';

import styles from './AlbumPhotos.module.scss';

export interface AlbumPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const ALbumPhotos = () => {
  const { id } = useParams();
  const { data: photos, isError, isLoading } = useGetAlbumPhotosByAlbumIdQuery(id ?? skipToken);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Album #{id}</h2>

        {isError && <p>Error</p>}
        {isLoading && <p>Loading...</p>}

        {photos && (
          <div className={styles.photoCards}>
            {photos.map((photo) => (
              <a
                key={photo.id}
                href={`https://picsum.photos/600?random=${photo.id}`}
                target="_blank"
                rel="noreferrer"
                className={styles.card}
              >
                <img src={`https://picsum.photos/150?random=${photo.id}`} alt="Album Photo" />
                <p>{photo.title}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
