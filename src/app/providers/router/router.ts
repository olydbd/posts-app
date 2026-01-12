import { AlbumDetails } from '@pages/AlbumDetails';
import { ALbumPhotos } from '@pages/AlbumPhotos';
import { Albums } from '@pages/Albums';
import { PostDetails } from '@pages/PostDetails/ui/PostDetails';
import { Posts } from '@pages/Posts';
import { UserAlbums } from '@pages/UserAlbums';
import { UserDetails } from '@pages/UserDetails';
import { UserPosts } from '@pages/UserPosts';
import { Users } from '@pages/Users';
import { UserTodos } from '@pages/UserTodos';
import { MainLayout } from '@shared/layouts/MainLayout';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Posts,
      },
      {
        path: 'posts',
        Component: Posts,
        children: [
          {
            path: ':id',
            Component: PostDetails,
          },
        ],
      },
      {
        path: 'users',
        children: [
          {
            index: true,
            Component: Users,
          },
          {
            path: ':id',
            Component: UserDetails,
          },
          {
            path: ':id/albums',
            Component: UserAlbums,
          },
          {
            path: ':id/todos',
            Component: UserTodos,
          },
          {
            path: ':id/posts',
            Component: UserPosts,
          },
        ],
      },
      {
        path: 'albums',
        children: [
          {
            index: true,
            Component: Albums,
          },
          {
            path: ':id',
            Component: AlbumDetails,
          },
          {
            path: ':id/photos',
            Component: ALbumPhotos,
          },
        ],
      },
    ],
  },
]);
