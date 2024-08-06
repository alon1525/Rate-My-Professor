import "../App.css";
import { Link } from "react-router-dom";

export default function ProfessorResult({ professor }) {
  
    const departmentEmojis = {
        'Computer Science': '💻', // Laptop emoji
        'Mathematics': '🔢', // Input numbers emoji
        'Physics': '🔭', // Telescope emoji
        'Chemistry': '🧪', // Test tube emoji
        'Biology': '🧬', // DNA emoji
        'Engineering': '🔧', // Wrench emoji
        'Economics': '💹', // Chart increasing emoji
        'History': '📜', // Scroll emoji
        'Psychology': '🧠', // Brain emoji
        'Linguistics': '🗣️', // Speaking head emoji
        'Philosophy': '🧘', // Person in lotus position emoji
        'Political Science': '🏛️', // Classical building emoji
        'Sociology': '👥', // Busts in silhouette emoji
        'Statistics': '📊', // Bar chart emoji
        'Arts': '🎨', // Artist palette emoji
        'Music': '🎵', // Musical note emoji
        'Literature': '📚', // Books emoji
        'Theater': '🎭', // Performing arts emoji
        'Design': '🖌️', // Paintbrush emoji
        'Architecture': '🏛️', // Classical building emoji
        'Medicine': '⚕️', // Medical symbol emoji
        'Law': '⚖️', // Balance scale emoji
        'Education': '🏫', // School emoji
        'Environmental Science': '🌍', // Globe showing Europe-Africa emoji
        'Astronomy': '🌌', // Milky way emoji
        'Geology': '🪨', // Rock emoji
        'Veterinary Medicine': '🐾', // Paw prints emoji
        'Agriculture': '🌾', // Sheaf of rice emoji
        'Business': '💼', // Briefcase emoji
        'Hospitality': '🍽️', // Fork and knife emoji
        'Tourism': '🌍', // Globe emoji
        'Biochemistry': '🧬🔬', // DNA and microscope emojis
    };
    
  const departmentEmoji = departmentEmojis[professor.department] || '';
  const score = professor.total_avg;
  let scoreClass = 'low';
  if (score >= 4) {
    scoreClass = 'high';
  } else if (score >= 3) {
    scoreClass = 'medium';
  }

  return (
    <Link to={`/professor/${professor.name}`} className="professor-result-link">
      <div className="professor-result-card">
        <div className={`score-box ${scoreClass}`}>
          <div className="score-box-label">Rating</div>
          <div className="score-box-number">{score}{score-Math.floor(score)===0 && ".0"}</div>
          <div className="score-box-reviews">{professor.num_reviews}55 reviews</div>
        </div>
        <div className="professor-result-info">
          <h2 className="professor-result-name">{professor.name}</h2>
          <p className="professor-result-department">{professor.department + " " +departmentEmoji}</p>
        </div>
      </div>
    </Link>
  );
}
