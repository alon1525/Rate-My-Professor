import {Link} from "react-router-dom";
import "../App.css";
import SignInButton from "../Components/SignInButton";

export default function Navbar(){

    return(<header>
        <Link to="/" className="logo">Logo</Link>
        <nav className="nav">
            <Link to="/" className="Link">מרצים מצטיינים</Link>
            <SignInButton where={"/"} text="הרשמה" paddingLeft={"30px"}></SignInButton>
        </nav>
    </header>);
}