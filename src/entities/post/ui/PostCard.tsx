import { useGetCommentsByPostIdQuery } from '@entities/comment';
import { Button } from '@shared/ui/Button';
import { CommentList } from '@widgets/CommentList';
import { ChevronDown, ChevronUp, Heart, MessageCircle, Share2 } from 'lucide-react';
import { memo, useState } from 'react';
import { Link } from 'react-router';

import type { Post } from '../model/types';
import styles from './PostCard.module.scss';

const RANDOM_LIKES = 23;

export const PostCard = memo(function PostCard({ id, title, body }: Post) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(RANDOM_LIKES);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const { data: comments } = useGetCommentsByPostIdQuery(id);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <Link to={`/posts/${id}`} className={styles.postLink}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{body}</p>
        </Link>

        <div className={styles.actions}>
          <Button
            className={`${styles.button} ${isLiked ? styles.buttonLiked : ''}`}
            onClick={handleLike}
          >
            <Heart className={`${styles.icon} ${isLiked ? styles.iconFilled : ''}`} />
            {likeCount}
          </Button>

          <Button className={styles.button} onClick={() => setIsCommentsOpen(!isCommentsOpen)}>
            <MessageCircle className={styles.icon} />
            {comments?.length ?? ''}
            {isCommentsOpen ? (
              <ChevronUp className={`${styles.icon} ${styles.iconMl}`} />
            ) : (
              <ChevronDown className={`${styles.icon} ${styles.iconMl}`} />
            )}
          </Button>

          <Button className={`${styles.button} ${styles.buttonMlAuto}`}>
            <Share2 className={styles.icon} />
          </Button>
        </div>

        <div className={`${styles.comments} ${isCommentsOpen ? styles.commentsOpen : ''}`}>
          <CommentList comments={comments} />
        </div>
      </div>
    </article>
  );
});
