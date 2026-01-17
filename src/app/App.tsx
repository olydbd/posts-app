import { ThemeProvider } from '@shared/lib/theme';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import { router } from './providers/router';
import { store } from './providers/store';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};
