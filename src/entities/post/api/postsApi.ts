import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Post } from '../model/types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),
    getPostsByUserId: builder.query<Post[], string | number>({
      query: (id) => `/users/${id}/posts`,
    }),
    getPostById: builder.query<Post, string | number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostsByUserIdQuery, useGetPostByIdQuery } = postsApi;
