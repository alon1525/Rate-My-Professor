import { Link } from "react-router-dom";
import "./SignInButton.css";

export default function SignInButton({ where, text, isSquare,buttonPadding,paddingRight, paddingLeft}) {
  return (
    <Link to={where} style={{ textDecoration: 'none', paddingLeft: paddingLeft,paddingRight:paddingRight}}>
      <button className={`boton-elegante`} style={{borderRadius: isSquare ? '0px' : '45px',padding:buttonPadding }}>
        {text}
      </button>
    </Link>
  );
}
