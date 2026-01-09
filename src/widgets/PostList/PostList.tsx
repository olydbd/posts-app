import { PostCard } from '@entities/post';
import { withLoading } from '@shared/lib/hoc/withLoading';

import styles from './PostList.module.scss';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
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
            <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const PostListWithLoading = withLoading(PostList);
