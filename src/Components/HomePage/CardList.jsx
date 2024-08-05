import React from 'react';
import ProfessorCard from './ProfessorCard';
import '../../App.css';

export default function CardList({ professors }) {
  return (
    <div className="card-list">
      {professors.map((prof, index) => (
        <ProfessorCard key={index} professor={prof} />
      ))}
    </div>
  );
}
