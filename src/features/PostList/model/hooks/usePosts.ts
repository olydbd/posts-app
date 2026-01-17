import { postsSelector, useGetPostsQuery } from '@entities/post';
import { useSelector } from 'react-redux';

export const usePosts = () => {
  const { isError, isLoading } = useGetPostsQuery();
  const posts = useSelector(postsSelector.selectAll);

  return { posts, isError, isLoading };
};
