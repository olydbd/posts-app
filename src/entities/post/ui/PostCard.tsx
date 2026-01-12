import type { Post } from '@features/PostList';
import { CommentList } from '@widgets/CommentList';
import { memo } from 'react';

import styles from './PostCard.module.scss';

export const PostCard = memo(function PostCard({ id, title, body }: Post) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{body}</p>
      <CommentList postId={id} />
    </article>
  );
});
