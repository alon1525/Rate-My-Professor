import "../App.css";
import { Link } from "react-router-dom";

export default function ProfessorResult({ professor }) {
  
  const departmentEmojis = {
    'מדעי המחשב': '💻', // Laptop emoji
    'מתמטיקה': '🔢', // Input numbers emoji
    'פיזיקה': '🔭', // Telescope emoji
    'כימיה': '🧪', // Test tube emoji
    'ביולוגיה': '🧬', // DNA emoji
    'הנדסה': '🔧', // Wrench emoji
    'כלכלה': '💹', // Chart increasing emoji
    'היסטוריה': '📜', // Scroll emoji
    'פסיכולוגיה': '🧠', // Brain emoji
    'בלשנות': '🗣️', // Speaking head emoji
    'פילוסופיה': '🧘', // Person in lotus position emoji
    'מדע המדינה': '🏛️', // Classical building emoji
    'סוציולוגיה': '👥', // Busts in silhouette emoji
    'סטטיסטיקה': '📊', // Bar chart emoji
    'אומניות': '🎨', // Artist palette emoji
    'מוזיקה': '🎵', // Musical note emoji
    'ספרות': '📚', // Books emoji
    'תיאטרון': '🎭', // Performing arts emoji
    'עיצוב': '🖌️', // Paintbrush emoji
    'ארכיטקטורה': '🏛️', // Classical building emoji
    'רפואה': '⚕️', // Medical symbol emoji
    'משפטים': '⚖️', // Balance scale emoji
    'חינוך': '🏫', // School emoji
    'מדעי הסביבה': '🌍', // Globe showing Europe-Africa emoji
    'אסטרונומיה': '🌌', // Milky way emoji
    'גיאולוגיה': '🪨', // Rock emoji
    'וטרינריה': '🐾', // Paw prints emoji
    'חקלאות': '🌾', // Sheaf of rice emoji
    'עסקים': '💼', // Briefcase emoji
    'אירוח': '🍽️', // Fork and knife emoji
    'תיירות': '🌍', // Globe emoji
    'ביוכימיה': '🧬🔬', // DNA and microscope emojis
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
        <div className="professor-result-info" dir="rtl">
          <h2 className="professor-result-name">{professor.name}</h2>
          <p className="professor-result-department" >{ departmentEmoji+ " "  + professor.department}</p>
        </div>
        <div className={`score-box ${scoreClass}`}>
          <div className="score-box-label">דירוג</div>
          <div className="score-box-number">{score}{score-Math.floor(score)===0 && ".0"}</div>
          <div className="score-box-reviews">ביקורות {professor.review_count} </div>
        </div>
      </div>
    </Link>
  );
}
