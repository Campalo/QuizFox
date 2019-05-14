import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    margin: 5,
    padding: 5,
    width: 190,
    fontSize: 15
  }
});

function MyButton({ classes, children, nextQuizOnClick }) {
  return (
    <Button
      onClick={nextQuizOnClick}
      variant="contained"
      color="primary"
      className={classes.button}>
      <b>{children}</b>
    </Button>
  );
}

export default withStyles(styles)(MyButton);
