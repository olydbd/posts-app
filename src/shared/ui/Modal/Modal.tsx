import type { MouseEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={handleContentClick}>
        {children}
      </div>
    </div>,
    document.body,
  );
};
