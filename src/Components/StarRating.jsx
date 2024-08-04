import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import './StarRating.css'; // Import the CSS file

export default function StarRating({ ratingName, rating, margin = "10px",overlayColor }) {
  function renderStars(rating) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating !== fullStars;
    const lastStarPrecentage = `${100*(1-(rating-fullStars))}%`;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FontAwesomeIcon icon={solidStar} key={i} className="star" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<HalfStar key={i} widthPrecentage={lastStarPrecentage} />);      
      }
    }

    return stars;
  }

  const HalfStar = ({widthPrecentage}) => (
    <div className="half-star">
      <FontAwesomeIcon icon={solidStar} className="star" />
      <div className="half-star-overlay" style={{width:widthPrecentage, background:overlayColor}}></div>
    </div>
  );

  return (
    <div className="star-rating-container" style={{ marginTop: margin}}>
      {ratingName && <p className="rating-name">{ratingName + ":" + rating}</p>}
      <div className="stars">{renderStars(rating)}</div>
    </div>
  );
}
