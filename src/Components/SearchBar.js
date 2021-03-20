import React from 'react';

const SearchBar = (props) => {
    const {searchTerm, handleChange} = props;
    return (
        <div className="search mb-4">
            <label htmlFor="search" className="form-label">Search Books</label>
            <input
                type="text"
                className="form-control"
                id="search"
                value={searchTerm}
                placeholder="Search"
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;