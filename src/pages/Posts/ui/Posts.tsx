import type { Post } from '@entities/post';
import { PostLengthFilter } from '@features/PostLengthFilter';
import { PostListWithLoading } from '@widgets/PostList';
import { useState } from 'react';
import { Outlet } from 'react-router';

import styles from './Posts.module.scss';

const posts: Post[] = [
  {
    id: 1,
    title: 'Monkey D. Luffy',
    body: 'The captain of the Straw Hat Pirates. A rubber man who dreams of becoming the Pirate King and values freedom and his crew above all else.',
    userId: 1,
  },
  {
    id: 2,
    title: 'Roronoa Zoro',
    body: 'The first mate of the Straw Hat Pirates and a master swordsman who uses three swords. His goal is to become the world`s greatest swordsman.',
    userId: 1,
  },
  {
    id: 3,
    title: 'Vinsmoke Sanji',
    body: 'The cook of the Straw Hat Pirates. He fights using only his legs and dreams of finding the legendary All Blue.',
    userId: 1,
  },
];

export const Posts = () => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <PostLengthFilter posts={posts} onFiltered={setFilteredPosts} />
        <PostListWithLoading isLoading={false} posts={filteredPosts} />
      </div>
      <Outlet />
    </section>
  );
};
