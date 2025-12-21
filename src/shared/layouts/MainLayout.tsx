import { Footer } from '@widgets/LayoutFooter';
import { Header } from '@widgets/LayoutHeader';
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
