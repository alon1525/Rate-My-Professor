import React from 'react';
import './OverallScore.css'; // Ensure correct path
import StarRating from '../StarRating';

export default function OverallScore({ professor }) {
  function getSkills() {
    return Object.entries(professor)
      .filter(([key, value]) => key.endsWith('_avg'))
      .map(([key, value]) => {
        const name = key.split('_avg')[0]; // Extract name before '_avg'
        return { name, value }; // Return skill object with value out of 5
      });
  }

  let skills = getSkills();
  skills.pop();


  // Mock evaluation count (update as needed)
  const evaluationCount = 10;

  return (
    <div className="card">
      <div className="header">
        <h2>{professor.total_avg}<span>/5</span></h2>
        <div className='evaluations'>
          <StarRating />
          <h2>{evaluationCount} Evaluations</h2>
        </div>
      </div>
      <div className="body">
        {skills.map(skill => (
          <div className="skill" key={skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}>
            <div className="skill-name">{skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}</div>
            <div className="skill-level">
              <div
                className="skill-percent"
                style={{ '--final-width': `${(skill.value / 5) * 100}%` }} // Set final width
              ></div>
            </div>
            <div className="skill-percent-number">{skill.value} / 5</div>
          </div>
        ))}
      </div>
    </div>
  );
}
