import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

class Modal extends Component {
  clickHandler = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.close();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.escHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escHandler);
  }

  escHandler = evt => {
    if (evt.key === 'Escape') {
      this.props.close();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.clickHandler}>
        <div className={css.modal}>
          <img src={this.props.picture} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  picture: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export { Modal };
