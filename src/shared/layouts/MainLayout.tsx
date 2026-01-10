import { Footer } from '@widgets/Footer';
import { Header } from '@widgets/Header';
import type { ReactNode } from 'react';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
