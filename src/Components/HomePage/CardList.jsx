import React from 'react';
import ProfessorCard from './ProfessorCard';
import '../../App.css';

export default function ProfessorList({ professors }) {
  return (
    <div className="professor-list">
      {professors.map((prof, index) => (
        <ProfessorCard key={index} professor={prof} />
      ))}
    </div>
  );
}
