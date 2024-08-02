import { Link } from "react-router-dom";
import "./SignInButton.css";

export default function SignInButton({ where, text, align }) {
  // Determine the alignment based on the 'align' prop
  const alignmentStyle = {
    position: 'absolute',
    top: '15px', // Adjust top as needed
    [align]: '15px', // Aligns to the left or right based on 'align' prop
  };

  return (
    <Link to={where} style={{ textDecoration: 'none' }}>
      <button className="boton-elegante" style={alignmentStyle}>
        {text}
      </button>
    </Link>
  );
}
