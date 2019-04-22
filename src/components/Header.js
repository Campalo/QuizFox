import React from "react";
import "../App.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = () => ({
  button: {
    margin: 50,
    padding: 10,
    width: 180,
    fontSize: 20
  }
});

function Header(props) {
  const { classes } = props;
  return (
    <header className="Header">
      {/* background image in css file */}
      <h1>Welcome to QuizFox!</h1>
      <h3>A Trivial Pursuit-like game created during a React bootcamp</h3>
      <p color="primary">
        Eager to play? Choose one category and its level of difficulty to access
        the questions
      </p>
      <Button variant="contained" color="primary" className={classes.button}>
        <b>Play now</b>
      </Button>
    </header>
  );
}

export default withStyles(styles)(Header);
