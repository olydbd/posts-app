import { AlbumCard, useGetAlbumsByUserIdQuery } from '@entities/album';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useParams } from 'react-router';

import styles from './UserAlbums.module.scss';

export const UserAlbums = () => {
  const { id } = useParams();
  const { data: albums, isError, isLoading } = useGetAlbumsByUserIdQuery(id ?? skipToken);

  if (isLoading)
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>Loading albums...</p>
      </div>
    );
  if (isError || !albums)
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>Error</p>
      </div>
    );
  if (albums.length === 0)
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>No albums found</p>
      </div>
    );

  return (
    <div className={styles.albums}>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};
