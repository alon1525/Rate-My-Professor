import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './ProfessorPage.css'; // Import the CSS file
import OverallScore from "../Components/OverallScore/OverallScore.jsx";
import ReviewList from "../Components/Review/ReviewList.jsx";
import ReviewButton from "../Components/ReviewButton/ReviewButton.jsx";
import ReviewForm from "./ReviewForm.jsx"; // Import ReviewForm

export default function ProfessorPage() {
  const { name } = useParams();
  const [professor, setProfessor] = useState({});
  const [reviews, setReviews] = useState([]);
  const [modal, setModal] = useState(false);


  function toggleModal() {
    setModal(prev => !prev);
  }
  console.log(modal);
    
  // Extract the professor name from the path
  const professorName = encodeURIComponent(name.split("/").pop());

  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);

      try {
        // Fetch professor details
        const professorResponse = await axios.get(
          `http://localhost:4000/api/professor?name=${professorName}`
        );
        setProfessor(professorResponse.data);

        // Fetch reviews for the professor
        const reviewsResponse = await axios.get(
          `http://localhost:4000/api/reviews?professorId=${professorResponse.data.professor_id}`
        );
        setReviews(reviewsResponse.data);
        
      } catch (error) {
        console.error("There was an error fetching the professor or reviews data!", error);
      }
    }
 
    fetchData();
  }, [professorName]);

  return (
    <div className="big-container">
      <div className="top-container">
        <div className="professor-details">
          <h1 className="professor-name">{professor.name}</h1>
          <p className="professor-detail">{professor.department}</p>
          <ReviewButton 
            width="300px" 
            marginTop={"20px"} 
            onClick={toggleModal} // Show modal when button is clicked
          />
        </div>
        <div className="overall-score-container">
          <OverallScore professor={professor} />
        </div>
      </div>
      <hr className="horizontal-line" />
      {reviews.length > 0 ? <ReviewList reviews={reviews} /> : <h1>No Reviews</h1>}

      {modal && (
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <ReviewForm></ReviewForm>
        </div>
      </div>
    )}
    </div>
  );
}
