import { ALbumPhotos } from '@pages/AlbumPhotos';
import { Albums } from '@pages/Albums';
import { NotFound } from '@pages/NotFound';
import { PostDetails } from '@pages/PostDetails';
import { Posts } from '@pages/Posts';
import { UserAlbums } from '@pages/UserAlbums';
import { UserDetails } from '@pages/UserDetails';
import { UserPosts } from '@pages/UserPosts';
import { Users } from '@pages/Users';
import { UserTodos } from '@pages/UserTodos';
import { MainLayout } from '@shared/layouts/MainLayout';
import { Fallback } from '@shared/ui/Fallback';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    ErrorBoundary: Fallback,
    children: [
      {
        index: true,
        Component: Posts,
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            Component: Posts,
          },
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
            children: [
              {
                path: 'albums',
                Component: UserAlbums,
              },
              {
                path: 'todos',
                Component: UserTodos,
              },
              {
                path: 'posts',
                Component: UserPosts,
              },
            ],
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
            path: ':id/photos',
            Component: ALbumPhotos,
          },
        ],
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);
