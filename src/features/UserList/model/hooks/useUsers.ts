import { useGetUsersQuery, usersSelector } from '@entities/user';
import { useSelector } from 'react-redux';

export const useUsers = () => {
  const { isError, isLoading } = useGetUsersQuery();
  const users = useSelector(usersSelector.selectAll);

  return { users, isError, isLoading };
};
