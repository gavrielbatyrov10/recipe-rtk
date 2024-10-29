import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search for a recipe..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
