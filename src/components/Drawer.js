import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../App.css";
import { NavLink } from "react-router-dom";
import MyButton from "./../components/Button";

const styles = theme => ({
  cardDifficulty: {
    fontSize: 20,
    textAlign: "center",
    margin: 8
  },

  iconSize: {
    fontSize: 40
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(145deg)"
  }
});

class DifficultyDrawer extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <CardActions className={classes.actions} disableActionSpacing>
          <Typography
            onClick={this.handleExpandClick}
            className={classes.cardDifficulty}
            component="h2"
            color="secondary"
          >
            Choose your difficulty wisely:
          </Typography>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <span className={classes.iconSize} role="img" aria-label="">
              &#128071;&#127998;
            </span>
          </IconButton>
        </CardActions>
        <Collapse className="flexAnswers" in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <MyButton>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={"/quiz/" + this.props.category + "/easy"}
              >
                Easy
              </NavLink>
            </MyButton>
            <MyButton>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={"/quiz/" + this.props.category + "/medium"}
              >
                Medium
              </NavLink>
            </MyButton>
            <MyButton>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={"/quiz/" + this.props.category + "/hard"}
              >
                Hard
              </NavLink>
            </MyButton>
          </CardContent>
        </Collapse>
      </div>
    );
  }
}

DifficultyDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DifficultyDrawer);
