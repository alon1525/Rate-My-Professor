import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";


export default function StarRating({ ratingName, rating }) {

  
  function renderStars(rating) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FontAwesomeIcon icon={solidStar} key={i} />);
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

const StarRatingContainer = styled.div`
  margin-top: 10px;
`;

const RatingName = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`;
