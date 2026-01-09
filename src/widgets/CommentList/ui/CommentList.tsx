import { useCallback, useState } from 'react';

import styles from './CommentList.module.scss';

const comments = [
  {
    postId: 1,
    id: 1,
    name: 'Monkey D. Luffy',
    email: 'luffy@mugiwara.pirates',
    body: "I've set myself to become the King of the Pirates… and if I die trying… then at least I tried!",
  },
  {
    postId: 1,
    id: 2,
    name: 'Dracule Mihawk',
    email: 'mihawk@shichibukai.world',
    body: 'The most dangerous power that boy has… is the ability to make people his allies.',
  },
  {
    postId: 2,
    id: 3,
    name: 'Roronoa Zoro',
    email: 'zoro@mugiwara.pirates',
    body: "If I can't even protect my captain's dream, then whatever ambition I have is nothing but talk!",
  },
  {
    postId: 3,
    id: 4,
    name: 'Sanji',
    email: 'sanji@mugiwara.pirates',
    body: "I'll never kick a woman, even if I die!",
  },
  {
    postId: 3,
    id: 5,
    name: 'Sanji',
    email: 'sanji@mugiwara.pirates',
    body: "A cook feeds people—pirate, marine, rich, poor. If you're hungry, you eat.",
  },
  {
    postId: 3,
    id: 6,
    name: 'Roronoa Zoro',
    email: 'zoro@mugiwara.pirates',
    body: "Lost again? You've got to learn directions before you try cooking up dinner.",
  },
];

interface CommentListProps {
  postId: number;
}

export const CommentList = ({ postId }: CommentListProps) => {
  const [open, setOpen] = useState(false);

  const commentsData = comments.filter((c) => c.postId === postId);

  const handleToggleComments = useCallback(() => {
    setOpen((o) => !o);
  }, []);

  return (
    <div>
      <button type="button" onClick={handleToggleComments} className={styles.button}>
        {open ? 'Close comments' : 'Open comments'}
      </button>

      <div className={`${styles.container} ${open ? styles.open : ''}`}>
        <div className={styles.scroll}>
          {commentsData.map((comment) => (
            <div key={comment.id} className={styles.content}>
              <p className={styles.name}>{comment.name}</p>
              <p className={styles.email}>{comment.email}</p>
              <p className={styles.body}>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
