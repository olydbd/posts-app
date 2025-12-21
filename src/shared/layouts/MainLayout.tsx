import { Footer } from '@widgets/Footer';
import { Header } from '@widgets/Header';
import { PostList } from '@widgets/PostList';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <PostList />
      </main>
      <Footer />
    </>
  );
};
