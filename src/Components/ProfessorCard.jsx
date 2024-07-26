import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

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
        stars.push(<FontAwesomeIcon icon={solidStar} key={i} />);
      } else {
        stars.push(<FontAwesomeIcon icon={regularStar} key={i} />);
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

export default function ProfessorCard({ professor }) {
  return (
    <ProfessorCardContainer>
      <ProfessorName>{professor.name}</ProfessorName>
      <ProfessorDepartment>{professor.department}</ProfessorDepartment>
      <StarRating ratingName="Clarity" rating={professor.clarity_avg} />
      <StarRating ratingName="Interesting" rating={professor.interesting_avg} />
      <StarRating ratingName="Organized" rating={professor.organize_avg} />
      <StarRating ratingName="Fairness" rating={professor.fairness_avg} />
    </ProfessorCardContainer>
  );
}
