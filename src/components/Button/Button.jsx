import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Button.module.css';

class Button extends Component {
  clickHandler = evt => {
    this.props.onClick();
  };

  render() {
    return (
      <button type="button" className={css.button} onClick={this.clickHandler}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export { Button };
