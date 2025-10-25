// Import React so we can use JSX (HTML-like code in JavaScript)
import React from "react";
// Import NavLink from react-router-dom to create navigation links
import { NavLink } from "react-router-dom";
// Importing the CSS file for navbar styling
import "./NavBar.css";

// This is our NavBar component
function NavBar() {
  return (
    // The main navigation bar section
    <nav className="navbar">
      {/* NavLink creates clickable links that change the page without reloading */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
}

// Exporting NavBar so we can use it in other parts of the app
export default NavBar;
