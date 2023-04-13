import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

const ImageGallery = ({ images, handleClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => {
        return <ImageGalleryItem image={image} handleClick={handleClick} />;
      })}
    </ul>
  );
};

export default ImageGallery;
