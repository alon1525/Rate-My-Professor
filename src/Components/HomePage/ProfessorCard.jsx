import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StarRating from '../StarRating.jsx';


const ProfessorCardContainer = styled.div`
  border: 1px solid #ddd; /* Lighter border */
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #F7E7DC; /* Background color */
  color: #333; /* Dark text color */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  
  &:hover {
    cursor: pointer; /* Change cursor to pointer on hover */
    transform: scale(1.05); /* Slightly increase the size */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
  }
`;

const ProfessorName = styled.h2`
  font-size: 1.5rem;
  color: #333; /* Dark text color */
`;

const ProfessorDepartment = styled.p`
  color: #666; /* Medium gray text color */
  margin: 8px 0;
`;




export default function ProfessorCard({ professor }) {
  return (
    <Link to={`/professor/${professor.name}`} style={{ textDecoration: 'none' }}>
    <ProfessorCardContainer>
      <ProfessorName>{professor.name}</ProfessorName>
      <ProfessorDepartment>{professor.department}</ProfessorDepartment>
      <StarRating ratingName="Clarity" rating={professor.clarity_avg} />
      <StarRating ratingName="Interesting" rating={professor.interesting_avg} />
      <StarRating ratingName="Organized" rating={professor.organize_avg} />
      <StarRating ratingName="Fairness" rating={professor.fairness_avg} />
    </ProfessorCardContainer>
    </Link>
  );
}
