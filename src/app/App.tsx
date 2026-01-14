import { ThemeProvider } from '@shared/lib/theme';
import { RouterProvider } from 'react-router';

import { router } from './providers/router';

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
