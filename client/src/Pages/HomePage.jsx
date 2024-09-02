import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfessorList from "../Components/ProfessorList";
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
        `http://localhost:4000/api/getTop5`
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
      <h1 className="top-professor-text" dir="rtl">המצטיינים</h1>
      <ProfessorList professors={professors} />
      <div className="picCards">
        <PicCard picture={picture1} title={"נהל וערוך את הדירוגים שלך"} />
        <PicCard
          picture={picture2}
          title={"הדירוגים הם בעילום שם"}
        />
        <PicCard picture={picture3} title={"חפש את המרצה שלך"} />   
      </div>
    </div>
  );
}