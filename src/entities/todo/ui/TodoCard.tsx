import { Check } from 'lucide-react';

import type { Todo } from '../model/types';
import styles from './TodoCard.module.scss';

export const TodoCard = ({ title, completed }: Todo) => {
  return (
    <div className={`${styles.card} ${completed ? styles.completed : ''}`}>
      <div className={styles.content}>
        <div className={`${styles.checkbox} ${completed ? styles.checked : ''}`}>
          {completed && <Check className={styles.icon} />}
        </div>

        <span className={`${styles.title} ${completed ? styles.done : ''}`}>{title}</span>

        <span
          className={`${styles.status} ${completed ? styles.statusDone : styles.statusPending}`}
        >
          {completed ? 'Done' : 'Pending'}
        </span>
      </div>
    </div>
  );
};
