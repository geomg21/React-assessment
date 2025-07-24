import React from 'react';
import { useJobContext } from '../context/JobContext';

const SearchBar = () => {
  const { dispatch, state } = useJobContext();

  const handleChange = (e) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value.toLowerCase() });
  };

  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        placeholder="Search by job title or company"
        value={state.searchQuery}
        onChange={handleChange}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;

