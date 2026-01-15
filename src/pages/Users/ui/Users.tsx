import { UserCard } from '@entities/user';
import { useUsers } from '@features/UserList';

import styles from './Users.module.scss';

export const Users = () => {
  const { users, isError, isLoading } = useUsers();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Users</h2>

        {isError && <p>Error</p>}
        {isLoading && <p>Loading...</p>}

        <div className={styles.users}>
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
};
