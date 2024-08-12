import { Link } from "react-router-dom";
import "./SignInButton.css";

export default function SignInButton({ where, text }) {
  // Determine the alignment based on the 'align' prop


  return (
    <Link to={where} style={{ textDecoration: 'none', paddingLeft: "30px" }}>
      <button className="boton-elegante">
        {text}
      </button>
    </Link>
  );
}
