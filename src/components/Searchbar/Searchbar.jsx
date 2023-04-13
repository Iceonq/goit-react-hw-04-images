import React from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    let searchQuery = e.target.searchInput.value;
    onSearch(searchQuery);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchform} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchformbutton}>
          <span className={css.searchformbuttonlabel}>Search</span>
        </button>

        <input
          className={css.searchforminput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchInput"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  searchQuery: PropTypes.string,
};

export default Searchbar;
