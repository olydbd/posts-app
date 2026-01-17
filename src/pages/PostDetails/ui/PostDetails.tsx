import { useGetPostByIdQuery } from '@entities/post';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { CommentList } from '@widgets/CommentList';
import { useNavigate, useParams } from 'react-router';

import styles from './PostDetails.module.scss';

export const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isError, isLoading } = useGetPostByIdQuery(id ?? skipToken);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/posts');
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {isError && <p>Error</p>}
        {isLoading && <p>Loading...</p>}
        {post && (
          <>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.body}>{post.body}</p>
            <CommentList postId={post.id} />
          </>
        )}
        <span className={styles.close} onClick={handleClose}>
          ✖
        </span>
      </div>
    </div>
  );
};
