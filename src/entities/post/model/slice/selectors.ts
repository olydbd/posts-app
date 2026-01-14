import type { RootState } from '@app/providers/store';

import { postsAdapter } from './postsSlice';

export const postsSelector = postsAdapter.getSelectors<RootState>((state) => state.posts);
