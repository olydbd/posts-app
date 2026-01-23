import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Photo } from '../model/types';

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Photos'],
  endpoints: (builder) => ({
    getPhotosByAlbumId: builder.query<Photo[], string | number>({
      query: (id) => `/albums/${id}/photos`,
      providesTags: (_r, _e, id) => [{ type: 'Photos', id }],
    }),
  }),
});

export const { useGetPhotosByAlbumIdQuery } = photosApi;
