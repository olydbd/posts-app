import type { Post } from '@entities/post';

export const filterByLength = (posts: Post[], minLength: number) => {
  return posts.filter((p) => p.title.length >= minLength);
};
