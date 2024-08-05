import StarRating from "./StarRating";
import "../App.css";
import { Link } from "react-router-dom";
export default function ProfessorResult({professor}) {
  return (
    <Link to={`/professor/${professor.name}`}>
    <div className="review-container">
      <h2 className="professor-name">{professor.name}</h2>
      <div className="review-score">
        <span className="score-label">Score: {professor.total_avg}</span>
        <StarRating rating={professor.total_avg} margin={"0px"} overlayColor={"white"} />
      </div>
    </div>
    </Link>
  );
}
