import { CommentList } from '@widgets/CommentList';

import styles from './PostCard.module.scss';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

export const PostCard = ({ id, title, body }: PostCardProps) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{body}</p>
      <CommentList postId={id} />
    </article>
  );
};
