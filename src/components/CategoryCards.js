import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import { NavLink } from 'react-router-dom';
import MyButton from './Button';

function CategoryCard({ category, name, photo }) {
  return (
    <Card id="responsiveCards">
      <CardActionArea>
        <CardMedia id="mediaCards" image={photo} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            {name}
          </Typography>
          <Typography component="h2" color="secondary">
            Chose your difficulty:
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* Use the Url Parameters to set the category and difficulty in the url
        and make those parameters available for the Quiz component.*/}
        <MyButton>
          <NavLink to={'/quiz/' + category + '/easy'}>Easy</NavLink>
        </MyButton>
        <MyButton>
          <NavLink to={'/quiz/' + category + '/medium'}>Medium</NavLink>
        </MyButton>
        <MyButton>
          <NavLink to={'/quiz/' + category + '/hard'}>Hard</NavLink>
        </MyButton>
      </CardActions>
    </Card>
  );
}

// TO DO : try the Expansion Panels to hide the level of difficluty and show them when clicking on the catégory cards
// https://material-ui.com/demos/expansion-panels/
export default CategoryCard;
