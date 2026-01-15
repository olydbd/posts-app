import { useGetUserByIdQuery } from '@entities/user';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { Link, useParams } from 'react-router';

import styles from './UserDetails.module.scss';

export const UserDetails = () => {
  const { id } = useParams();
  const { data: user, isError, isLoading } = useGetUserByIdQuery(id ?? skipToken);

  if (isLoading) {
    return <p className={styles.state}>Loading...</p>;
  }

  if (isError || !user) {
    return <p className={styles.state}>Error</p>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.name}>{user.name}</h2>
          <p className={styles.username}>@{user.username}</p>
          <p className={styles.email}>{user.email}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Contact</h3>
            <p>
              <span>Phone:</span> {user.phone}
            </p>
            <p>
              <span>Website:</span> {user.website}
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Address</h3>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
            <p className={styles.geo}>
              Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Company</h3>
            <p>
              <span>Name:</span> {user.company.name}
            </p>
            <p className={styles.muted}>{user.company.catchPhrase}</p>
            <p className={styles.muted}>{user.company.bs}</p>
          </div>
        </div>

        <div className={styles.actions}>
          <Link to={`/users/${user.id}/posts`} className={styles.action}>
            View posts
          </Link>

          <Link to={`/users/${user.id}/albums`} className={styles.action}>
            View albums
          </Link>

          <Link to={`/users/${user.id}/todos`} className={styles.action}>
            View todos
          </Link>
        </div>
      </div>
    </section>
  );
};
