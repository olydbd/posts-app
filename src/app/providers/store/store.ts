import { albumsApi } from '@entities/album';
import { commentsApi } from '@entities/comment';
import { postsApi } from '@entities/post';
import postsReducer from '@entities/post/model/slice/postsSlice';
import { todosApi } from '@entities/todo';
import { usersApi } from '@entities/user';
import usersReducer from '@entities/user/model/slice/usersSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      commentsApi.middleware,
      usersApi.middleware,
      albumsApi.middleware,
      todosApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
