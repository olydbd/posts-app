import type { Post } from '@entities/post';
import { PostLengthFilter } from '@features/PostLengthFilter';
import { usePosts } from '@features/PostList';
import { PostListWithLoading } from '@widgets/PostList';
import { Sparkles } from 'lucide-react';
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
        <div className={styles.header}>
          <div className={styles.badge}>
            <Sparkles className={styles.badgeIcon} />
            Welcome to the community
          </div>
          <h1 className={styles.title}>Share Your Thoughts</h1>
          <p className={styles.subtitle}>
            Join our vibrant community of thinkers, creators, and dreamers. Explore posts, share
            ideas, and connect with like-minded people.
          </p>
        </div>

        <div className={styles.posts}>
          <PostLengthFilter
            posts={posts}
            filteredPosts={filteredPosts}
            onFiltered={setFilteredPosts}
          />
          <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
        </div>
      </div>
      <Outlet />
    </section>
  );
};
