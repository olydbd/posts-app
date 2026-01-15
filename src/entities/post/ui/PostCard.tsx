import type { Post } from '@features/PostList';
import { CommentList } from '@widgets/CommentList';
import { memo } from 'react';
import { Link } from 'react-router';

import styles from './PostCard.module.scss';

export const PostCard = memo(function PostCard({ id, title, body }: Post) {
  return (
    <article className={styles.card}>
      <Link to={`/posts/${id}`} className={styles.title}>
        {title}
      </Link>
      <p className={styles.body}>{body}</p>
      <CommentList postId={id} />
    </article>
  );
});
