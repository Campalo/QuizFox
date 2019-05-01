import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Creative-Tail-Animal-fox.svg/128px-Creative-Tail-Animal-fox.svg.png"
            alt="fox"
          />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <NavLink activeClassName="active" to="/about-us">
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

// class Navbar2 extends Component {
// 	render() {
// 		return (
// 			<div className={classes.root}>
// 				<nav>
// 					<ul>
// 						<li>
// 							<NavLink activeClassName="active" exact to="/Home">
// 								Home
// 							</NavLink>
// 						</li>
// 						<li>
// 							<NavLink activeClassName="active" to="/about-us">
// 								About Us
// 							</NavLink>
// 						</li>
// 					</ul>
// 				</nav>
// 			</div>
// 		);
// 	}
// }

// export default Navbar2;
