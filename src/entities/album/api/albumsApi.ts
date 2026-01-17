import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Album, AlbumPhotos } from '../model/types';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Albums', 'Photos'],
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => '/albums',
      providesTags: ['Albums'],
    }),
    getAlbumsByUserId: builder.query<Album[], string | number>({
      query: (id) => `/users/${id}/albums`,
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: 'Albums' as const, id })) : ['Albums'],
    }),
    getAlbumPhotosByAlbumId: builder.query<AlbumPhotos[], string | number>({
      query: (id) => `/albums/${id}/photos`,
      providesTags: (_r, _e, id) => [{ type: 'Photos', id }],
    }),
  }),
});

export const { useGetAlbumsQuery, useGetAlbumsByUserIdQuery, useGetAlbumPhotosByAlbumIdQuery } =
  albumsApi;
