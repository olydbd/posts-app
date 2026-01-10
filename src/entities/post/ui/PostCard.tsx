import { CommentList } from '@widgets/CommentList';

import type { Post } from '../model/types';
import styles from './PostCard.module.scss';

export const PostCard = ({ id, title, body }: Post) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{body}</p>
      <CommentList postId={id} />
    </article>
  );
};
