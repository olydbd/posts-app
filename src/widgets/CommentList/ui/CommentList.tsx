import { useLazyGetCommentsByPostIdQuery } from '@entities/comment';
import { useState } from 'react';

import styles from './CommentList.module.scss';

interface CommentListProps {
  postId: number;
}

export const CommentList = ({ postId }: CommentListProps) => {
  const [open, setOpen] = useState(false);

  const [getComments, { data: comments, isLoading }] = useLazyGetCommentsByPostIdQuery();

  const handleToggleComments = () => {
    setOpen((o) => !o);
    getComments(postId);
  };

  return (
    <div>
      <button type="button" onClick={handleToggleComments} className={styles.button}>
        {open ? 'Close comments' : 'Open comments'}
      </button>

      <div className={`${styles.container} ${open ? styles.open : ''}`}>
        {isLoading && <p>Loading...</p>}
        {comments && (
          <div className={styles.scroll}>
            {comments.map((comment) => (
              <div key={comment.id} className={styles.content}>
                <p className={styles.name}>{comment.name}</p>
                <p className={styles.email}>{comment.email}</p>
                <p className={styles.body}>{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
