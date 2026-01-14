export {
  postsApi,
  useGetPostByIdQuery,
  useGetPostsByUserIdQuery,
  useGetPostsQuery,
} from './api/postsApi';
export { postsSelector } from './model/slice/selectors';
export { type Post } from './model/types';
export { PostCard } from './ui/PostCard';
