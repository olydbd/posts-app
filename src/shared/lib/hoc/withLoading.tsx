import type { ComponentType } from 'react';

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {
  const ComponentWithLoading = ({ isLoading, ...props }: WithLoadingProps & T) => {
    if (isLoading) return <p>Loading...</p>;
    return <WrappedComponent {...(props as T)} />;
  };

  return ComponentWithLoading;
}
