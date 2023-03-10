import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, smallpic, largepic, onClick }) => {
  const clickHandler = evt => {
    onClick(largepic);
  };

  return (
    <li className={css.galleryItem}>
      <img
        src={smallpic}
        alt={'picture #' + id}
        className={css.galleryImg}
        onClick={clickHandler}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallpic: PropTypes.string.isRequired,
  largepic: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { ImageGalleryItem };
