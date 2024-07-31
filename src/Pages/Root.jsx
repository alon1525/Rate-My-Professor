import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../App.css";

export default function Root() {
  const [navbarOpen, setNavBarOpen] = useState(false);

  function handleNavbar() {
    setNavBarOpen((navbarState) => !navbarState);
  }

  return (<>
    <div className="root-container">
      <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
      <main>
        <Outlet />
      </main>
    </div>
      <Footer />
    </>

  );
}
