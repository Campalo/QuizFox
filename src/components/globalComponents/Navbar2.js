import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "tachyons";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Navbar2(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <NavLink activeClassName="active" exact to="/">
              <img
                className="grow h2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Creative-Tail-Animal-fox.svg/128px-Creative-Tail-Animal-fox.svg.png"
                alt="fox"
              />
            </NavLink>
          </Typography>

          <Typography variant="h6" color="inherit" className={classes.grow}>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              activeClassName="active"
              exact
              to="/categories"
            >
              Play
            </NavLink>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              activeClassName="active"
              to="/about-us"
            >
              About Us
            </NavLink>
          </Typography>
          {/* <Button color="inherit">About us</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar2);
