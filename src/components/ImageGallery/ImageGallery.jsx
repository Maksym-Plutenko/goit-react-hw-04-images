// import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({pictures, onClick}) => {
  // render() {
    return (
      <ul className={css.gallery}>
        {pictures.map(img => (
          <ImageGalleryItem
            key={img.id}
            id={img.id}
            smallpic={img.webformatURL}
            largepic={img.largeImageURL}
            onClick={onClick}
          />
        ))}
      </ul>
    );
  // }
}

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export { ImageGallery };
