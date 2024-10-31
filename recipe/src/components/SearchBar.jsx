import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/actions';
import "./index.css";


const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="seacrbar__container">
    <input className='searchbar'
      type="text"
      placeholder="Search for a recipe..."
      onChange={handleChange}
    />
    </div>
  );
};

export default SearchBar;
