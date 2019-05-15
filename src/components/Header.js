import React from "react";
import "../App.css";
import MyButton from "./Button";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      {/* background image in css file */}
      <h1>Welcome to QuizFox</h1>
      <h3>A Trivial Pursuit-like game created during a 4 months React bootcamp</h3>
      <MyButton>
        <NavLink style={{ textDecoration: "none", color: "white" }} to="/categories">
          Play Now
        </NavLink>
      </MyButton>
    </header>
  );
}

export default Header;
