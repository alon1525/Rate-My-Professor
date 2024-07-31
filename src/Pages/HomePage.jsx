import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../Components/SearchBar";
import ProfessorList from "../Components/HomePage/ProfessorList";
import "../App.css";

export default function HomePage() {
  const [professors, setProfessors] = useState([]);

  async function fetchProfessors(query = '') {
    if (query !== '') {
      query = `?search=${query}`;
    }
    try {
      const response = await axios.get(`http://localhost:4000/api/professors${query}`);
      setProfessors(response.data);
    } catch (error) {
      console.error("There was an error fetching the professors!", error);
    }
  }

  useEffect(() => {
    fetchProfessors();
  }, []);



  return (
    <>
    <div className="container">
      <SearchBar onSearch={fetchProfessors} />
      <ProfessorList professors={professors} />
    </div>
    </>
  );
}
