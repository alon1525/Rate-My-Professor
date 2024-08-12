import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import "../App.css";
import Navbar from "../Components/Navbar";
export default function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
