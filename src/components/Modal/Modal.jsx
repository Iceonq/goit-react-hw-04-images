import React from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ image, handleCloseModal }) => {
  return (
    <div className={css.overlay} onClick={handleCloseModal}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <img src={image} alt="Cze" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string,
};

export default Modal;
