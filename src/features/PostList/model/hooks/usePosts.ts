import { useEffect, useState } from 'react';

import { mockPosts } from '../mockPosts';
import type { Post } from '../types';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return { posts, isLoading };
};
