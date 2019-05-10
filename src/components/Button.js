import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    margin: 50,
    padding: 10,
    width: 180,
    fontSize: 20,
  },
});

function MyButton(props) {
  const { classes, children, scoreUpdateOnClick } = props;
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      <b>{children}</b>
    </Button>
  );
}

export default withStyles(styles)(MyButton);
