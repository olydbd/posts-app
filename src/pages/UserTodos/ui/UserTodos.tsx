import { TodoCard, useGetTodosByUserIdQuery } from '@entities/todo';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { ItemList } from '@shared/ui/ItemList';
import { useParams } from 'react-router';

import styles from './UserTodos.module.scss';

export const UserTodos = () => {
  const { id } = useParams();
  const { data: todos, isError, isLoading } = useGetTodosByUserIdQuery(id ?? skipToken);

  if (isLoading)
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>Loading todos...</p>
      </div>
    );
  if (isError || !todos)
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>Error</p>
      </div>
    );
  if (todos.length === 0)
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>No todos found</p>
      </div>
    );

  return <ItemList items={todos} renderItem={(todo) => <TodoCard {...todo} />} />;
};
