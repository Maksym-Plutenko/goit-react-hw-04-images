import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  clickHandler = evt => {
    this.props.onClick(this.props.largepic);
  };

  render() {
    return (
      <li className={css.galleryItem}>
        <img
          src={this.props.smallpic}
          alt={'picture #' + this.props.id}
          className={css.galleryImg}
          onClick={this.clickHandler}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallpic: PropTypes.string.isRequired,
  largepic: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { ImageGalleryItem };
