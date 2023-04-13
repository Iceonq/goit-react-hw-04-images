import React from 'react';
import css from './Button.module.css';

const Button = ({ pagination, hasMore }) => {
  let buttonVisibility = {};
  if (hasMore === true) {
    buttonVisibility.opacity = 1;
  } else {
    buttonVisibility.opacity = 0;
  }
  return (
    <button
      onClick={pagination}
      className={css.button}
      style={buttonVisibility}
    >
      Load More
    </button>
  );
};

export default Button;
