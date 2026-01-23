import type { ReactNode } from 'react';

import styles from './ItemList.module.scss';

interface WithId {
  id: number;
}

interface ItemListProps<T extends WithId> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export const ItemList = <T extends WithId>({ items, renderItem }: ItemListProps<T>) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};
