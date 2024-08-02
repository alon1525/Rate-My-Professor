import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../Components/SearchBar";
import ProfessorList from "../Components/HomePage/ProfessorList";
import "../App.css";
import picture1 from "../Assets/OnlineReview-amico.svg";
import picture2 from "../Assets/Top secret-bro.svg";
import picture3 from "../Assets/Search engines-bro.svg";
import PicCard from "../Components/HomePage/PicCard";
import styled from "styled-components"

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
      <div className="picCards">
        <PicCard picture={picture1} title={"Manage and edit your ratings"}/>
        <PicCard picture={picture2} title={"Your ratings are always anonymous"}/>
        <PicCard picture={picture3} title={"Search for your professor"}/>
      </div>
      <HorizontalLine></HorizontalLine>
      <h1 className="top-professor-text">Top Professors</h1>
      <ProfessorList professors={professors} />
    </div>

    </>
  );
}

const HorizontalLine = styled.hr`
  width: 100%; /* Full width of the parent container */
  margin-top: 5px; /* Adjust top and bottom margin as needed */
  border: 0;
  font-size: 30px;
  border-top: 1px solid #2d3436; /* Change thickness to 2px */
`;