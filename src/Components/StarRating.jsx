import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

export default function StarRating({ ratingName, rating, margin = "10px" }) {
  // Update the StarRatingContainer to accept marginTop as a prop

  function renderStars(rating) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FontAwesomeIcon icon={solidStar} key={i} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<HalfStar key={i} />);
      } else {
        stars.push(<FontAwesomeIcon icon={regularStar} key={i} />);
      }
    }

    return stars;
  }

  return (
    <StarRatingContainer>
      <RatingName>{ratingName}</RatingName>
      <div>{renderStars(rating)}</div>
    </StarRatingContainer>
  );
}

const RatingName = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`;

const HalfStar = styled(FontAwesomeIcon).attrs({
  icon: solidStar,
})`
  position: relative;
  &:before {
    content: "\f005"; // Unicode for star icon
    position: absolute;
    left: 0;
    width: 50%;
    overflow: hidden;
    display: block;
    color: #333;
  }
`;
const StarRatingContainer = styled.div`
margin-top: 0px;
`;
