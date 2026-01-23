import type { ReactNode } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};
