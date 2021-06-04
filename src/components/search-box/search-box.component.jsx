import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <center><input
        className='search'
        type='search'
        placeholder={"Search"}
        onChange={handleChange} 
        />
        </center>
);



