import React from "react";
import './Review.css'; // Import the CSS file
import Review from "./Review";

export default function ReviewList({ reviews }) {
  return (
    <div className="review-list-container">
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
}
