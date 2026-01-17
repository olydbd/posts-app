import { usersApi } from '@entities/user/api/usersApi';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import type { User } from '../types';

export const usersAdapter = createEntityAdapter({
  selectId: (user: User) => user.id,
});

const initialState = usersAdapter.getInitialState();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(usersApi.endpoints.getUsers.matchFulfilled, (state, { payload }) => {
      usersAdapter.setAll(state, payload);
    });
  },
});

export default usersSlice.reducer;
