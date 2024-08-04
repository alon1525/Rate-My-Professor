// ProfessorPage.jsx
import React, { useState,useEffect  } from "react";
import { useLoaderData } from "react-router-dom";
import './ProfessorPage.css'; // Import the CSS file
import OverallScore from "../Components/OverallScore/OverallScore.jsx";
import ReviewList from "../Components/Review/ReviewList.jsx";
import ReviewButton from "../Components/ReviewButton/ReviewButton.jsx";
import ReviewForm from "./ReviewForm.jsx"; // Import ReviewForm
import axios from "axios"

export default function ProfessorPage() {
  const { professor, reviews } = useLoaderData();
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(prev => !prev);
  }

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once on mount

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
            <ReviewForm name={professor.name} />
          </div>
        </div>
      )}
    </div>
  );
}

export async function professorLoader({ params }) {
  const professorName = encodeURIComponent(params.name.split("/").pop());

  try {
    // Fetch professor details
    const professorResponse = await axios.get(
      `http://localhost:4000/api/professor?name=${professorName}`
    );

    // Fetch reviews for the professor
    console.log(professorResponse.data);
    const reviewsResponse = await axios.get(
      `http://localhost:4000/api/reviews?name=${professorResponse.data.name}`
    );

    return {
      professor: professorResponse.data,
      reviews: reviewsResponse.data
    };

  } catch (error) {
    console.error("There was an error fetching the professor or reviews data!", error);
    throw new Response("Failed to load data", { status: 500 });
  }
}
