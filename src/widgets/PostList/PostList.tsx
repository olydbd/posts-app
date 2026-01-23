import { type Post, PostCard } from '@entities/post';
import { withLoading } from '@shared/lib/hoc/withLoading';

import styles from './PostList.module.scss';

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  if (posts.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyStateText}>No posts match your filter criteria.</p>
        <p className={styles.emptyStateHint}>Try increasing the maximum title length.</p>
      </div>
    );
  }

  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export const PostListWithLoading = withLoading(PostList);
