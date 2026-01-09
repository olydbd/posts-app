import { Footer } from '@widgets/Footer';
import { Header } from '@widgets/Header';
import { PostListWithLoading } from '@widgets/PostList';

const posts = [
  {
    id: 1,
    title: 'Monkey D. Luffy',
    description:
      'The captain of the Straw Hat Pirates. A rubber man who dreams of becoming the Pirate King and values freedom and his crew above all else.',
  },
  {
    id: 2,
    title: 'Roronoa Zoro',
    description:
      'The first mate of the Straw Hat Pirates and a master swordsman who uses three swords. His goal is to become the world’s greatest swordsman.',
  },
  {
    id: 3,
    title: 'Vinsmoke Sanji',
    description:
      'The cook of the Straw Hat Pirates. He fights using only his legs and dreams of finding the legendary All Blue.',
  },
];

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <PostListWithLoading isLoading={false} posts={posts} />
      </main>
      <Footer />
    </>
  );
};
