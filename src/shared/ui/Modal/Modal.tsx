import { X } from 'lucide-react';
import { type MouseEvent, type PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '../Button';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={handleContentClick}>
        <Button onClick={onClose} className={styles.closeButton}>
          <X />
        </Button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

const ModalHeader = ({ children }: PropsWithChildren) => {
  return <div className={styles.header}>{children}</div>;
};

const ModalBody = ({ children }: PropsWithChildren) => {
  return <div className={styles.body}>{children}</div>;
};

const ModalFooter = ({ children }: PropsWithChildren) => {
  return <div className={styles.footer}>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
