import { useGetPostsByUserIdQuery } from '@entities/post';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { PostList } from '@widgets/PostList';
import { useParams } from 'react-router';

import styles from './UserPosts.module.scss';

export const UserPosts = () => {
  const { id } = useParams();
  const { data: posts, isError, isLoading } = useGetPostsByUserIdQuery(id ?? skipToken);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !posts) return <p>Error</p>;
  if (posts.length === 0) return <p>No posts found</p>;

  return (
    <div className={styles.container}>
      <PostList posts={posts} />
    </div>
  );
};
