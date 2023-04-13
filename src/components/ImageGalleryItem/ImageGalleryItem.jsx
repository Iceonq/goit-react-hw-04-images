import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, handleClick }) => {
  return (
    <li className={css.galleryitem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={css.galleryitemimage}
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
};

export default ImageGalleryItem;
