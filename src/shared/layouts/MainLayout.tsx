import { Footer } from '@widgets/Footer';
import { Header } from '@widgets/Header';
import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
