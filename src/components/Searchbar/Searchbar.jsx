import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { HiMagnifyingGlass } from 'react-icons/hi2';

import css from './Searchbar.module.css';

const Searchbar = ({onSubmit}) => {
  // state = {
  //   request: '',
  // };

  const [request, setRequest] = useState('');

  const changeHandler = evt => {
    // this.setState({
    //   request: evt.currentTarget.value,
    // });
    setRequest(evt.currentTarget.value);
  };

  const submitHandler = evt => {
    evt.preventDefault();
    onSubmit(request);
    // this.setState({
    //   request: '',
    // });
    setRequest('');
  };

  // render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={submitHandler}>
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
            value={request}
            onChange={changeHandler}
          />
        </form>
      </header>
    );
  // }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export { Searchbar };
