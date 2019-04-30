import React from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  button: {
    margin: 50,
    padding: 10,
    width: 180,
    fontSize: 20
  }
});

function MyButton(props) {
  const { classes } = props;
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      <b />
    </Button>
  );
}

export default withStyles(styles)(MyButton);
