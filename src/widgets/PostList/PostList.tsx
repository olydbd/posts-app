import { type Post, PostCard } from '@entities/post';
import { withLoading } from '@shared/lib/hoc/withLoading';

import styles from './PostList.module.scss';

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export const PostListWithLoading = withLoading(PostList);
