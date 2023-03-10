import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { HiMagnifyingGlass } from 'react-icons/hi2';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    request: '',
  };

  changeHandler = evt => {
    this.setState({
      request: evt.currentTarget.value,
    });
  };

  submitHandler = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.request);
    this.setState({
      request: '',
    });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.submitHandler}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}> Search </span>
            <HiMagnifyingGlass className={css.ico} />
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.request}
            onChange={this.changeHandler}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export { Searchbar };
