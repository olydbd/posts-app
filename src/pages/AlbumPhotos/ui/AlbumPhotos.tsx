import { useGetPhotosByAlbumIdQuery } from '@entities/photo';
import { PhotoCard } from '@entities/photo/ui/PhotoCard';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { Camera } from 'lucide-react';
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
  const { data: photos, isError, isLoading } = useGetPhotosByAlbumIdQuery(id ?? skipToken);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <div className={styles.icon}>
              <Camera className={styles.iconImage} />
            </div>
            <h2 className={styles.title}>Photos</h2>
          </div>

          <p className={styles.subtitle}>Browse all {photos?.length} photos from our community</p>
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

        {photos && (
          <div className={styles.gallery}>
            {photos.map((photo) => (
              <PhotoCard key={photo.id} {...photo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
