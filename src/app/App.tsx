import { MainPage } from '@pages/MainPage';
import { MainLayout } from '@shared/layouts/MainLayout';
import { ThemeProvider } from '@shared/lib/theme';

export const App = () => {
  return (
    <ThemeProvider>
      <MainLayout>
        <MainPage />
      </MainLayout>
    </ThemeProvider>
  );
};
