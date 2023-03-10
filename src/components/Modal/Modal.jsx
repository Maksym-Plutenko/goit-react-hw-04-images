import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

const Modal = ({ picture, close }) => {
  useEffect(() => {
    const escHandler = evt => {
      if (evt.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', escHandler);

    return () => {
      document.removeEventListener('keydown', escHandler);
    };
  }, [close]);

  const clickHandler = evt => {
    if (evt.target === evt.currentTarget) {
      close();
    }
  };

  return (
    <div className={css.overlay} onClick={clickHandler}>
      <div className={css.modal}>
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  picture: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export { Modal };
