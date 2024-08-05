import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()

  function handleSearch(newValue) {
    setQuery(newValue);
  }

  async function handleSubmit(e) {
    e.preventDefault(); // Prevents the default form submission
    navigate(`/searchPage/${encodeURIComponent(query)}`);
  }

  return (
    <div className="search-bar-container">
      <div className="search-bar-wrap">
        <h2>Enter your professor</h2>
        <form className="search-bar" onSubmit={handleSubmit}>
          <span className="material-symbols-outlined">person</span>
          <input
            type="search"
            placeholder="Search for a professor..."
            value={query}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}
