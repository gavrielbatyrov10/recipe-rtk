// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/actions';
import './index.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        dispatch(setSearchTerm(value)); // Dispatch the search term
    };

    const handleFocus = () => {
        setInputValue((prev) => prev); // Keeps the input value when focused
    };

    const handleClear = () => {
        setInputValue('');
        dispatch(setSearchTerm('')); // Clear the search term
    };

    return (
        <div className="searchbar__container">
            <input
                className='searchbar'
                type="text"
                placeholder="Search for a recipe..."
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
            />
            {inputValue && (
                <button className="clear-button" onClick={handleClear}>
                    Clear
                </button>
            )}
        </div>
    );
};

export default SearchBar;
