import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import ProfessorList from "../Components/ProfessorList";
import "../App.css";
import Navbar from "../Components/Navbar";

export default function HomePage() {
  const [navbarOpen, setNavBarOpen] = useState(false);
  const [professors, setProfessors] = useState([
    {
      name: "Ziv Av",
      department: "Computer Science",
      teachingRating: 4,
      knowledgeRating: 2,
      helpfulRating: 1,
    },
    {
      name: "Jane Smith",
      department: "Mathematics",
      teachingRating: 4,
      knowledgeRating: 2,
      helpfulRating: 1,
    },
    {
      name: "Jane Smith",
      department: "Mathematics",
      teachingRating: 4,
      knowledgeRating: 1,
      helpfulRating: 1,
    },
    {
      name: "Jane Smith",
      department: "Mathematics",
      teachingRating: 2,
      knowledgeRating: 3,
      helpfulRating: 1,
    },
    {
      name: "Jane Smith",
      department: "Mathematics",
      teachingRating: 1,
      knowledgeRating: 5,
      helpfulRating: 1,
    },
    {
      name: "Jane Smith",
      department: "Mathematics",
      teachingRating: 4,
      knowledgeRating: 2,
      helpfulRating: 1,
    },
    {
      name: "Ziv Av",
      department: "Computer Science",
      teachingRating: 4,
      knowledgeRating: 2,
      helpfulRating: 1,
    },
    {
      name: "Jane Smith",
      department: "Mathematics",
      teachingRating: 4,
      knowledgeRating: 2,
      helpfulRating: 1,
    },
    {
      name: "Jane Smith",
      department: "Mathematics",
      teachingRating: 4,
      knowledgeRating: 1,
      helpfulRating: 1,
    },
    {
      name: "Jane Smith",
      department: "Mathematics",
      teachingRating: 2,
      knowledgeRating: 3,
      helpfulRating: 1,
    },
    {
      name: "Jane Smith",
      department: "Mathematics",
      teachingRating: 1,
      knowledgeRating: 5,
      helpfulRating: 1,
    },
    {
      name: "Jane Smith",
      department: "Mathematics",
      teachingRating: 4,
      knowledgeRating: 2,
      helpfulRating: 1,
    },
  ]);

  const handleSearch = (query) => {
    const dummyProfessors = [
      { name: "John Doe", department: "Computer Science", rating: 4.5 },
      { name: "Jane Smith", department: "Mathematics", rating: 3.8 },
    ];
    setProfessors(
      dummyProfessors.filter((prof) =>
        prof.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  function handleNavbar(){
    setNavBarOpen((navbarState) => {return !navbarState});
  }

  return (
    <div className="container">
      <Navbar
        navbarState={navbarOpen}
        handleNavbar={handleNavbar}
      />
      <SearchBar onSearch={handleSearch} />
      <ProfessorList professors={professors} />
    </div>
  );
}
