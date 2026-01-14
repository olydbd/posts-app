import { useParams } from 'react-router';

import styles from './AlbumDetails.module.scss';

export const AlbumDetails = () => {
  const { id } = useParams();
  return <h2 className={styles.title}>Album Details: {id}</h2>;
};
