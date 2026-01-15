import type { Todo } from '../model/types';
import styles from './TodoCard.module.scss';

export const TodoCard = ({ title, completed }: Todo) => {
  return (
    <div className={`${styles.card} ${completed ? styles.done : ''}`}>
      <span>{completed ? '✓' : '○'}</span> {title}
    </div>
  );
};
