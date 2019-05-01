import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 300,
    margin: "50px"
  },
  media: {
    height: "140px"
  },
  padding: {
    paddingBottom: "10px"
  }
};

function CategoryCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
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
          <Typography component="p" className={classes.padding}>
            Do you like XXX then this First Category is for you, give it a try!
          </Typography>
          <Typography component="p" color="secondary">
            Chose your difficulty:
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Easy
        </Button>
        <Button size="small" color="primary">
          Medium
        </Button>
        <Button size="small" color="primary">
          Hard
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(CategoryCard);
