import { useParams } from 'react-router';

import styles from './PostDetails.module.scss';

export const PostDetails = () => {
  const { id } = useParams();

  return <h2 className={styles.title}>Post Id: {id}</h2>;
};
