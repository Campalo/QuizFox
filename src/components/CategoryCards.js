import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../App.css";

const styles = {
  media: {
    height: "300px"
  },
  padding: {
    paddingTop: "10px"
  }
};

function CategoryCard(props) {
  const { classes } = props;
  return (
    <Card id="responsiveCards">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/1MLvmOW.jpg"
          title="Little fox"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            First Category
          </Typography>
          <Typography component="p">
            Do you like XXX then this First Category is for you, give it a try!
          </Typography>
          <Typography component="p" color="secondary" className={classes.padding}>
            <b>Chose your difficulty:</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          Easy
        </Button>
        <Button size="large" color="primary">
          Medium
        </Button>
        <Button size="large" color="primary">
          Hard
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(CategoryCard);