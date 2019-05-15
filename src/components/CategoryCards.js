import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../App.css";
import DifficultyDrawer from "./../components/Drawer";

function CategoryCard({ category, name, photo }) {
  return (
    <Card className="responsiveCards">
      <CardActionArea>
        <CardMedia className="mediaCards" image={photo} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <DifficultyDrawer category={category} />
    </Card>
  );
}

// TO DO : try the Expansion Panels to hide the level of difficluty and show them when clicking on the catégory cards
// https://material-ui.com/demos/expansion-panels/
export default CategoryCard;
