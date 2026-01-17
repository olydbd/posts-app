import { postsApi } from '@entities/post/api/postsApi';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import type { Post } from '../types';

export const postsAdapter = createEntityAdapter({
  selectId: (post: Post) => post.id,
});

const initialState = postsAdapter.getInitialState();

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(postsApi.endpoints.getPosts.matchFulfilled, (state, { payload }) => {
      postsAdapter.setAll(state, payload);
    });
    builder.addMatcher(postsApi.endpoints.addPost.matchFulfilled, (state, { payload }) => {
      postsAdapter.addOne(state, payload);
    });
  },
});

export default postsSlice.reducer;
