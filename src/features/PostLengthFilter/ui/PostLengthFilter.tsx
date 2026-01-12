import type { Post } from '@entities/post';
import { type ChangeEvent, useState } from 'react';

import { filterByLength } from '../lib/filterByLength';
import styles from './PostLengthFilter.module.scss';

interface PostLengthFilterProps {
  posts: Post[];
  onFiltered: (posts: Post[]) => void;
}

export const PostLengthFilter = ({ posts, onFiltered }: PostLengthFilterProps) => {
  const [minLength, setMinLength] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) ?? 0;
    setMinLength(value);

    const filtered = filterByLength(posts, value);
    onFiltered(filtered);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="min-title-length" className={styles.label}>
        Minimum title length:
      </label>
      <input
        id="min-title-length"
        type="number"
        value={minLength}
        onChange={handleChange}
        min={0}
        className={styles.input}
      />
    </div>
  );
};
