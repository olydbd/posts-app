import type { ComponentType } from 'react';

import styles from './withLoading.module.scss';

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {
  const ComponentWithLoading = ({ isLoading, ...props }: WithLoadingProps & T) => {
    if (isLoading)
      return (
        <div className={styles.loadingState}>
          <p className={styles.loadingStateText}>Loading posts...</p>
        </div>
      );
    return <WrappedComponent {...(props as T)} />;
  };

  return ComponentWithLoading;
}
