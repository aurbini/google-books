import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios"; 
import "../index.css";
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

// const saveBook = async(title, author, description, image, link) => {
//   const book = {
//     title, 
//     author, 
//     description, 
//     image, 
//     link
//   }
//   console.log(book); 
//   const savedBooks = await axios.post("/api/book", book)
// }


export default function BookCard(props) {
  const [save, setSave] = useState()
  const  {title, author, description, image, link, saveBook} = props

  const classes = useStyles();

  return (
    <Card container className={classes.root} xs={12} sm={6} spacing={3}>
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
        <Button onClick={() => saveBook(title, author, description, image, link)}>
          Save
        </Button>
        <Button size="small" color="primary">
          <a href={link} >Link</a>
        </Button>
      </CardActions>
    </Card>
  );
}
