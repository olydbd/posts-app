import { postsSelector, useGetPostsQuery } from '@entities/post';
import { useSelector } from 'react-redux';

export const usePosts = () => {
  const { error, isLoading } = useGetPostsQuery();
  const posts = useSelector(postsSelector.selectAll);

  return { posts, error, isLoading };
};
