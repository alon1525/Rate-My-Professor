import {Link} from "react-router-dom";
import "../App.css";
import SignInButton from "../Components/SignInButton";

export default function Navbar(){

    return(<header>
        <Link to="/" className="logo">Logo</Link>
        <nav className="nav">
            <Link to="/" className="Link">Top Professors</Link>
            <SignInButton where={"/"} text="Login"></SignInButton>
        </nav>
    </header>);
}