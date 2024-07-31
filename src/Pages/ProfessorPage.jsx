import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import OverallScore from "../Components/OverallScore/OverallScore.jsx";
import ReviewList from "../Components/ReviewList.jsx";
import ReviewButton from "../Components/ReviewButton/ReviewButton.jsx";

// Center the container horizontally within the page
const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  padding-top: 70px;
  width: 100%; /* Full width */
  background-color: #FFF8F3;
`;

const Container = styled.div`
  display: flex;
  padding: 0 20px; /* Add padding for small screens */
  justify-content: center;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  max-width: 1200px; /* Set a maximum width for better alignment */
  width: 100%; /* Full width for flexibility */
  gap: 70px;
`;

const ProfessorDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px; /* Space between columns */
  flex: 1 1 300px; /* Allow flexibility in sizing */
`;

const OverallScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 300px; /* Allow flexibility in sizing */
`;

const ProfessorName = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const ProfessorDetail = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

// Media query for smaller screens
const MediaQueryStyles = styled.div`
  @media (max-width: 768px) {
    ${Container} {
      flex-direction: column; /* Stack items vertically */
      gap: 20px; /* Adjust space between items */
    }
  }
`;

// Styled horizontal line
const HorizontalLine = styled.hr`
  width: 100%; /* Full width of the parent container */
  max-width: 1200px; /* Match the width of the Container */
  margin: 40px 0; /* Adjust top and bottom margin as needed */
  border: 0;
  font-size: 30px;
  border-top: 4px solid #2d3436; /* Change thickness to 2px */
`;

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
          `http://localhost:4000/api/professors?search=${professorName}` // Handle potential multiple results appropriately
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
    <BigContainer>
      <MediaQueryStyles>
        <Container>
          <ProfessorDetails>
            <ProfessorName>{professor.name}</ProfessorName>
            <ProfessorDetail>{professor.department}</ProfessorDetail>
            <ReviewButton width="300px" marginTop={"126px"}></ReviewButton>
          </ProfessorDetails>
          <OverallScoreContainer>
            <OverallScore professor={professor} />
          </OverallScoreContainer>
        </Container>
        <HorizontalLine />
      </MediaQueryStyles>
      <ReviewList/>
    </BigContainer>
  );
}
