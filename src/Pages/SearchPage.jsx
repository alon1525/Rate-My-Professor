import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useLocation } from "react-router-dom";

export default function SearchResultsPage() {
  const [professors, setProfessors] = useState([]);
  const query = new URLSearchParams(useLocation().search).get('search') || '';

  useEffect(() => {
    async function fetchProfessors(query) {
      if (query !== '') {
        try {
          const response = await axios.get(`http://localhost:4000/api/professors?search=${query}`);
          setProfessors(response.data);
        } catch (error) {
          console.error("There was an error fetching the professors!", error);
        }
      }
    }
    
    fetchProfessors(query);
  }, [query]);

  return (
    <div className="search-results-page">
      <header className="search-header">
        <h1>Search Results for "{query}"</h1>
      </header>
    </div>
  );
}
