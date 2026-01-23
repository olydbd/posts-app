import type { Post } from '@entities/post';
import { SlidersHorizontal } from 'lucide-react';
import { type ChangeEvent, useState } from 'react';

import { filterByLength } from '../lib/filterByLength';
import styles from './PostLengthFilter.module.scss';

interface PostLengthFilterProps {
  posts: Post[];
  filteredPosts: Post[];
  onFiltered: (posts: Post[]) => void;
}

export const PostLengthFilter = ({ posts, filteredPosts, onFiltered }: PostLengthFilterProps) => {
  const [minLength, setMinLength] = useState(() => String(0));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    setMinLength(nextValue);

    const filtered = filterByLength(posts, Number(nextValue));
    onFiltered(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SlidersHorizontal className={styles.headerIcon} />
        <span className={styles.title}>Filter Posts</span>
      </div>

      <div className={styles.body}>
        <label htmlFor="min-title-length" className={styles.label}>
          Minimum title length:
        </label>
        <input
          id="min-title-length"
          type="number"
          placeholder="e.g. 30"
          value={minLength}
          onChange={handleChange}
          min={0}
          className={styles.input}
        />
        {minLength && (
          <p className={styles.info}>
            Showing {filteredPosts.length} of {posts.length} posts
          </p>
        )}
      </div>
    </div>
  );
};
