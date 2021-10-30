import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core/';


export default function BookCard(props) {
  const  { title, author, image } = props.book
  const classes = useStyles();

  return (
    <Card className={classes.root} xs={12} sm={6} spacing={3}>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title} gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="body2" component="h2">
              {author}
            </Typography>
          <CardActionArea > 
            <Button 
              onClick={props.onClick}
              variant="outlined">{props.buttonText}</Button>
          </CardActionArea>
        </CardContent>
    </Card>
  );
}


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    height: 370,
    marginBottom: '2px',
    backgroundColor: theme.palette.secondary.dark
  },
  mainContent: {
    paddingBottom: '0px',

  },
  media: {
    height: 200,
    maxWidth: '100%', 
    maxHeight: '100%'
  },
  description: {
    paddingBottom: '3px', 
    justifyContent: 'center', 
  },
  title: {
    maxHeight: 80
  }, 
  author: {
    marginBottom: 0, 
    paddingBottom: 0
  }
}));


   // location.pathname === '/saved'? 
      //   <Button
      //     onClick={() => props.removeBook(_id)}
      //   >Delete
      //   </Button> :
      //   <Button
      //     onClick={() => props.addBook(props.book)}>Add</Button>