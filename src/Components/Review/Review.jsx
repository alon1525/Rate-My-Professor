import React from "react";
import './Review.css'; // Import the CSS file
import StarRating from "../StarRating";

// Format the date
function formatDate(date) {
  const dateformat = new Date(date);
  return dateformat.toISOString().split('T')[0];
}

export default function Review({ review }) {
  return (
    <div className="review-container">
      <h2 className="review-headline">Good Professor</h2>
      <div className="review-score">
        <span className="score-label">Score:</span>
        <StarRating rating={review.clarity} margin={"-4px"} />
      </div>
      <p className="review-body">{review.comment}</p>
      <p className="review-date">{formatDate(review.review_date)}</p>
    </div>
  );
}
