import React from "react";
import "../App.css";
import MyButton from "./Button";

function Header(props) {
  const { classes } = props;
  return (
    <header className="Header">
      {/* background image in css file */}
      <h1>Welcome to QuizFox!</h1>
      <h3>A Trivial Pursuit-like game created during a React bootcamp</h3>
      <p>Eager to play? Choose one category and its level of difficulty to access the questions</p>
      <MyButton>Play now</MyButton>
    </header>
  );
}

export default withStyles(styles)(Header);
