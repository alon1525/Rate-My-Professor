import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onChange }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(newValue) {
    setQuery(newValue);
    onChange(newValue); // Update parent state
  }

  async function handleSubmit(e) {
    e.preventDefault(); // Prevents the default form submission
    navigate(`/searchPage/${encodeURIComponent(query)}`);
  }

  return (
<form className="search-bar" onSubmit={handleSubmit}>
  <div className="input-container">
    <input
      type="search"
      id="search-input"
      placeholder=" "
      value={query}
      onChange={(e) => handleSearch(e.target.value)}
      dir="rtl" // Set text direction to right-to-left
    />
    <label dir="rtl" htmlFor="search-input">חפש את המרצה...</label>
  </div>
  <span className="material-symbols-outlined">person</span>
</form>

  );
}
