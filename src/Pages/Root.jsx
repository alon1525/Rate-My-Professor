import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import "../App.css";
import SignInButton from "../Components/SignInButton";
export default function Root() {
  return (
    <div>
      <div className="root-container">
      <SignInButton where={"/"} text="Home" align={"left"}></SignInButton>
      <SignInButton where={"/login"} text="Login" align={"right"}></SignInButton>

      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
