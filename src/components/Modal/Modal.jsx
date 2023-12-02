import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Modal_backdrop, Modal_content, Close_x } from './Modal.module';

import icon from 'assets/x1.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  return createPortal(
    <Modal_backdrop onClick={handleBackdropClick}>
      <Modal_content>
        <Close_x onClick={handleCloseClick} src={icon} alt="Close button" />
        {children}
      </Modal_content>
    </Modal_backdrop>,
    modalRoot
  );
};
