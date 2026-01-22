import { UserCard } from '@entities/user';
import { useUsers } from '@features/UserList';
import { Users as UsersIcon } from 'lucide-react';

import styles from './Users.module.scss';

export const Users = () => {
  const { users, isError, isLoading } = useUsers();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <UsersIcon className={styles.iconImage} />
          </div>

          <h2 className={styles.title}>Community Members</h2>

          <p className={styles.subtitle}>Meet the amazing people who make our community thrive</p>
        </div>

        {isError && (
          <div className={styles.errorState}>
            <p className={styles.errorStateText}>Error</p>
          </div>
        )}
        {isLoading && (
          <div className={styles.loadingState}>
            <p className={styles.loadingStateText}>Loading albums...</p>
          </div>
        )}

        <div className={styles.users}>
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
};
