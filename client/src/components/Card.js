import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios"; 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const saveBook = async(title, author, description, image, link) => {
  const book = {
    title, 
    author, 
    description, 
    image, 
    link
  }
  const savedBooks = await axios.post("/api/book", book)

}


export default function BookCard(props) {
  const  {title, author, description, image, link} = props

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => saveBook(title, author, description, image, link)} size="small" color="primary">
          Save
        </Button>
        <Button size="small" color="primary">
          <a href={link} >Link</a>
        </Button>
      </CardActions>
    </Card>
  );
}