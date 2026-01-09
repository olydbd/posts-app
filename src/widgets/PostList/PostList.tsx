import { PostCard } from '@entities/post';
import { withLoading } from '@shared/lib/hoc/withLoading';

import styles from './PostList.module.scss';

interface Post {
  id: number;
  title: string;
  description: string;
}

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} description={post.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const PostListWithLoading = withLoading(PostList);
