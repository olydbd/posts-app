import { useNavigate, useParams } from 'react-router';

import styles from './PostDetails.module.scss';

export const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/posts');
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Post Id: {id}</h2>
        <span className={styles.close} onClick={handleClose}>
          ✖
        </span>
      </div>
    </div>
  );
};
