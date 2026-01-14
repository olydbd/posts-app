import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Album, AlbumPhotos } from '../model/types';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => '/albums',
    }),
    getAlbumsByUserId: builder.query<Album[], string | number>({
      query: (id) => `/users/${id}/albums`,
    }),
    getAlbumPhotosByAlbumId: builder.query<AlbumPhotos[], string | number>({
      query: (id) => `/albums/${id}/photos`,
    }),
  }),
});

export const { useGetAlbumsQuery, useGetAlbumsByUserIdQuery, useGetAlbumPhotosByAlbumIdQuery } =
  albumsApi;
