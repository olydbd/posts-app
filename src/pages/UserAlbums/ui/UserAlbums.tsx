import { AlbumCard, useGetAlbumsByUserIdQuery } from '@entities/album';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useParams } from 'react-router';

import styles from './UserAlbums.module.scss';

export const UserAlbums = () => {
  const { id } = useParams();
  const { data: albums, isError, isLoading } = useGetAlbumsByUserIdQuery(id ?? skipToken);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !albums) return <p>Error</p>;
  if (albums.length === 0) return <p>No albums found</p>;

  return (
    <div className={styles.albums}>
      {albums.map((album) => (
        <AlbumCard key={album.id} id={album.id} title={album.title} />
      ))}
    </div>
  );
};
