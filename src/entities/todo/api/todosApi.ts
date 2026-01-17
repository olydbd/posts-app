import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Todo } from '../model/types';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodosByUserId: builder.query<Todo[], string | number>({
      query: (id) => `/users/${id}/todos`,
      providesTags: (_r, _e, userId) => [{ type: 'Todos', id: userId }],
    }),
  }),
});

export const { useGetTodosByUserIdQuery } = todosApi;
