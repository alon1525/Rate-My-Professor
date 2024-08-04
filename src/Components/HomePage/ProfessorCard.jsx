import React from 'react';
import { Link } from 'react-router-dom';
import './ProfessorCard.css';
import StarRating from '../StarRating.jsx';

export default function ProfessorCard({ professor }) {

  return (
    <Link to={`/professor/${professor.name}`} style={{ textDecoration: 'none' }}>
      <div className="professor-card-container">
        <h2 className="professor-name">{professor.name}</h2>
        <p className="professor-department">{professor.department}</p>
        <StarRating ratingName="Rating" rating={professor.total_avg} />
      </div>
    </Link>
  );
}
