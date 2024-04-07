import css from './SearchBox.module.css';

// SearchBox.js
// import React from 'react';

const SearchBox = ({ value, onChange }) => {
    return (
      <div className={css.SearchBox}>
      <label>Find contacts by name</label>
    <input className={css.inputSearchBox}
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={e => onChange(e.target.value)}
            />
            </div>
  );
};


export default SearchBox