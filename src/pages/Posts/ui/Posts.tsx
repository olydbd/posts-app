import { PostLengthFilter } from '@features/PostLengthFilter';
import { type Post, usePosts } from '@features/PostList';
import { PostListWithLoading } from '@widgets/PostList';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';

import styles from './Posts.module.scss';

export const Posts = () => {
  const { posts, isLoading } = usePosts();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Posts</h2>
        <PostLengthFilter posts={posts} onFiltered={setFilteredPosts} />
        <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
      </div>
      <Outlet />
    </section>
  );
};
