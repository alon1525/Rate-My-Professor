import React, { useState } from "react";
import "../App.css";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSearch(newValue) {
    setQuery(newValue);
  }

  return (
    <div className="search-bar-container">
      <div className="search-bar-wrap">
      <h2>Enter your professor</h2>
      <div className="search-bar">
        <span class="material-symbols-outlined">person</span>
        <input
          type="search"
          placeholder="Search for a professor..."
          value={query}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
      </div>
    </div>
  );
}
