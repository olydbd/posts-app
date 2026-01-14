import type { RootState } from '@app/providers/store';

import { usersAdapter } from './usersSlice';

export const usersSelector = usersAdapter.getSelectors<RootState>((state) => state.users);
