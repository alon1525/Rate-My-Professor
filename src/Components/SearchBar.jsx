import React, { useState } from 'react';
import '../App.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = async (newValue) => {
    await setQuery(newValue);
    onSearch(newValue);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a professor..."
        value={query}
        onChange={(e) => {handleSearch(e.target.value);}}
      />
    </div>
  );
}
