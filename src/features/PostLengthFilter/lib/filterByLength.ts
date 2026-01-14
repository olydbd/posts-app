import type { Post } from '@features/PostList';

export const filterByLength = (posts: Post[], minLength: number) => {
  return posts.filter((p) => p.title.length >= minLength);
};
