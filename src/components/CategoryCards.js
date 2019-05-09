import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../App.css";
import { NavLink } from "react-router-dom";

function CategoryCard() {
  return (
    <Card id="responsiveCards">
      <CardActionArea>
        <CardMedia id="mediaCards" image="https://i.imgur.com/1MLvmOW.jpg" title="Little fox" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="secondary">
            First Category
          </Typography>
          <Typography component="p">
            Do you like XXX then this First Category is for you, give it a try!
          </Typography>
          <Typography component="p" color="secondary">
            <b>Chose your difficulty:</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* Use the Url Parameters to set the category and difficulty in the url
        and make those parameters available for the Quiz component.
        TO DO : make the category parameter dynamique */}
        <Button size="large" color="primary">
          <NavLink to="/quiz/18/easy">Easy</NavLink>
        </Button>
        <Button size="large" color="primary">
          <NavLink to="/quiz/18/medium">Medium</NavLink>
        </Button>
        <Button size="large" color="primary">
          <NavLink to="/quiz/18/hard">Hard</NavLink>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CategoryCard;