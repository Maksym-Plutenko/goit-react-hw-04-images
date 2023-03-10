// import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = ({onClick}) => {
  // const clickHandler = evt => {
  //   onClick();
  // };

  // render() {
    return (
      <button type="button" className={css.button} onClick={onClick}>
        Load more
      </button>
    );
  // }
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export { Button };
