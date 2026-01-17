import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Post } from '../model/types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    getPostsByUserId: builder.query<Post[], string | number>({
      query: (id) => `/users/${id}/posts`,
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: 'Posts' as const, id })) : [],
    }),
    getPostById: builder.query<Post, string | number>({
      query: (id) => `/posts/${id}`,
      providesTags: (_r, _e, id) => [{ type: 'Posts', id }],
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: '/posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
  useGetPostByIdQuery,
  useAddPostMutation,
} = postsApi;
