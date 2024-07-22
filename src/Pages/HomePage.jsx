import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../Components/SearchBar";
import ProfessorList from "../Components/ProfessorList";
import "../App.css";
import Navbar from "../Components/Navbar";

export default function HomePage() {
  const [navbarOpen, setNavBarOpen] = useState(false);
  const [professors, setProfessors] = useState([]);

  async function fetchProfessors(query = ''){
    if (query !== ''){
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

  function handleNavbar() {
    setNavBarOpen((navbarState) => !navbarState);
  }

  return (
    <div className="container">
      <Navbar
        navbarState={navbarOpen}
        handleNavbar={handleNavbar}
      />
      <SearchBar onSearch={fetchProfessors} />
      <ProfessorList professors={professors} />
    </div>
  );
}
