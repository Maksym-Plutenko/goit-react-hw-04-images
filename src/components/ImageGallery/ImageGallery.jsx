import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.gallery}>
        {this.props.pictures.map(img => (
          <ImageGalleryItem
            key={img.id}
            id={img.id}
            smallpic={img.webformatURL}
            largepic={img.largeImageURL}
            onClick={this.props.onClick}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
};

export { ImageGallery };
