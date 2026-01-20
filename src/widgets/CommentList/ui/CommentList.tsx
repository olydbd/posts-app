import type { Comment } from '@entities/comment';
import { User } from 'lucide-react';

import styles from './CommentList.module.scss';

interface CommentListProps {
  comments?: Comment[];
}

export const CommentList = ({ comments }: CommentListProps) => {
  if (comments?.length === 0) {
    return <p className={styles.empty}>No comments yet. Be the first to comment!</p>;
  }

  return (
    <>
      {comments &&
        comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.header}>
              <div className={styles.avatar}>
                <User className={styles.avatarIcon} />
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{comment.name}</p>
                <p className={styles.email}>{comment.email}</p>
              </div>
            </div>
            <p className={styles.content}>{comment.body}</p>
          </div>
        ))}
    </>
    // <div>
    //   <button type="button" onClick={handleToggleComments} className={styles.button}>
    //     {open ? 'Close comments' : 'Open comments'}
    //   </button>

    //   <div className={`${styles.container} ${open ? styles.open : ''}`}>
    //     {isLoading && <p>Loading...</p>}
    //     {comments && (
    //       <div className={styles.scroll}>
    //         {comments.map((comment) => (
    //           <div key={comment.id} className={styles.content}>
    //             <p className={styles.name}>{comment.name}</p>
    //             <p className={styles.email}>{comment.email}</p>
    //             <p className={styles.body}>{comment.body}</p>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};
