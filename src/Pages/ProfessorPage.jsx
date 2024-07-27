import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

const ProfessorName = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const ProfessorDetail = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const StarRatingContainer = styled.div`
  margin-top: 10px;
`;

const RatingName = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`;

const StarRating = ({ ratingName, rating }) => {
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push("⭐");
      } else {
        stars.push("☆");
      }
    }

    return stars;
  };

  return (
    <StarRatingContainer>
      <RatingName>{ratingName}</RatingName>
      <div>{renderStars(rating)}</div>
    </StarRatingContainer>
  );
};

export default function ProfessorPage() {
  const location = useLocation();
  const [professor, setProfessor] = useState({});

  // Extract the professor name from the path
  const pathParts = location.pathname.split("/");
  const professorName = pathParts[pathParts.length - 1];

  useEffect(() => {
    async function fetchProfessor() {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/professors?search=${professorName}`
        );
        setProfessor(response.data[0]);
        console.log(response.data[0]);
      } catch (error) {
        console.error("There was an error fetching the professor data!", error);
      }
    }

    fetchProfessor();
  }, [professorName]);

  return (
    <div className="big-container">
      <Navbar />
      <div className="container">
        <ProfessorName>{professor.name}</ProfessorName>
        <ProfessorDetail>Department: {professor.department}</ProfessorDetail>
        <StarRating ratingName="Clarity" rating={professor.clarity_avg} />
        <StarRating
          ratingName="Interesting"
          rating={professor.interesting_avg}
        />
        <StarRating ratingName="Organized" rating={professor.organize_avg} />
        <StarRating ratingName="Fairness" rating={professor.fairness_avg} />
      </div>
    </div>
  );
}
