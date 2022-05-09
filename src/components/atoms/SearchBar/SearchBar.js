import React, { useState } from 'react';
import { Input } from './SearchBar.styles.js';

const SearchBar = ({ placeholder }) => {
    return <Input placeholder={placeholder} />;
};

export default SearchBar;
