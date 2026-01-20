import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Comment } from '../model/types';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query<Comment[], string | number>({
      query: (id) => `/posts/${id}/comments`,
      providesTags: (_r, _e, postId) => [{ type: 'Comments', id: postId }],
    }),
  }),
});

export const { useGetCommentsByPostIdQuery } = commentsApi;
