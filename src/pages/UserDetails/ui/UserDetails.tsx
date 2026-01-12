import { useParams } from 'react-router';

import styles from './UserDetails.module.scss';

export const UserDetails = () => {
  const { id } = useParams();
  return <h2 className={styles.title}>User Details: {id}</h2>;
};
