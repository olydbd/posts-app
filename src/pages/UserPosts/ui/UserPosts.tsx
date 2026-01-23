import { useGetPostsByUserIdQuery } from '@entities/post';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { PostList } from '@widgets/PostList';
import { useParams } from 'react-router';

import styles from './UserPosts.module.scss';

export const UserPosts = () => {
  const { id } = useParams();
  const { data: posts, isError, isLoading } = useGetPostsByUserIdQuery(id ?? skipToken);

  if (isLoading)
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>Loading posts...</p>
      </div>
    );
  if (isError || !posts)
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>Error</p>
      </div>
    );
  if (posts.length === 0)
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>No posts found</p>
      </div>
    );

  return (
    <div className={styles.container}>
      <PostList posts={posts} />
    </div>
  );
};
