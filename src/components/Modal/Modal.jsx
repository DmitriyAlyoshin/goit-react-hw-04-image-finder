import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown); 
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

    const closeByBackdrop = e => {
      if (e.currentTarget === e.target) {
        onClose();
      }
    };

  return (
    <div className={css.overlay} onClick={closeByBackdrop}>
      <div className={css.modal}>
        <img className={css.modal__image} src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImageURL: PropTypes.string,
};

export default Modal;
