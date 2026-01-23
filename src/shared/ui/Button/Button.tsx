import type { MouseEventHandler, PropsWithChildren } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button = ({ children, onClick, className }: PropsWithChildren<ButtonProps>) => {
  return (
    <button type="button" onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};
