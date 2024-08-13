import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "../Components/HomePage/CardList";
import "../App.css";
import picture1 from "../Assets/OnlineReview-amico.svg";
import picture2 from "../Assets/Top secret-bro.svg";
import picture3 from "../Assets/Search engines-bro.svg";
import PicCard from "../Components/HomePage/PicCard";
import Section from "../Components/Section";

export default function HomePage() {
  const [professors, setProfessors] = useState([]);

  async function fetchProfessors(query = "") {
    if (query !== "") {
      query = `?search=${query}`;
    }
    try {
      const response = await axios.get(
        `http://localhost:4000/api/professors${query}`
      );
      setProfessors(response.data);
    } catch (error) {
      console.error("There was an error fetching the professors!", error);
    }
  }

  useEffect(() => {
    fetchProfessors();
  }, []);

  return (
    <div className="container">
      <Section height="100vh"></Section>
      <div className="picCards">
        <PicCard picture={picture1} title={"Manage and edit your ratings"} />
        <PicCard
          picture={picture2}
          title={"Your ratings are always anonymous"}
        />
        <PicCard picture={picture3} title={"Search for your professor"} />   
      </div>
      <div className="bottom-part">
      <h1 className="top-professor-text">Top Professors</h1>
      <CardList professors={professors} />
      </div>
    </div>
  );
}
