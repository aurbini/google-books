import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core/';
import API from '../utils/api'
import { useLocation } from 'react-router-dom'


export default function BookCard(props) {
  console.log(props)
  const  { title, author, description, image, _id } = props.book
  const classes = useStyles();
  const location = useLocation()
  console.log(_id)

  return (
    <Card className={classes.root} xs={12} sm={6} spacing={3}>
      <CardActionArea className={classes.mainContent}>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent className={classes.description}>
        <Typography className={classes.title} gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2">
            {author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{padding: 0, display: 'flex', justifyContent: 'center'}}>
      {location.pathname === '/saved'? 
        <Button
          onClick={() => props.removeBook(_id)}
        >Delete
        </Button> :
        <Button
          onClick={() => props.addBook(props.book)}>Add</Button>}
      </CardActions>
    </Card>
  );
}


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 370,
    marginBottom: '2px',
    paddingBottom: '2px'
  },
  mainContent: {
    paddingBottom: '0px'
  },
  media: {
    height: 200,
    maxWidth: '100%', 
    maxHeight: '100%'
  },
  description: {
    paddingBottom: '3px'
  },
  title: {
    maxHeight: 80
  }, 
  author: {
    marginBottom: 0, 
    paddingBottom: 0
  }
});


