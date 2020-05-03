import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Button} from '@material-ui/core/';

import API from '../utils/api'
import { v1 as uuidv1 } from 'uuid';
import { AddIcon, DeleteIcon }from '@material-ui/icons/ZoomOutMapRounded';
import { useLocation } from 'react-router-dom'
import { typography } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 350
  },
  media: {
    height: 160,
  },
  title: {
    maxHeight: 80
  }, 
  author: {
    marginBottom: 0, 
    paddingBottom: 0
  }
});



export default function BookCard(props) {
  console.log(props)
  const  { title, author, description, image, _id } = props.book
  const classes = useStyles();
  const location = useLocation()
  console.log(_id)

  return (
    <Card container className={classes.root} xs={12} sm={6} spacing={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
        <Typography className={classes.title} gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2">
            {author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {location.pathname === '/saved'? 
        <Button
          onClick={() => props.removeBook(_id)}
        >Delete
        </Button> :
        <Button
          onClick={() => API.saveBook(props.book)}>Add</Button>}
      </CardActions>
    </Card>
  );
}



// ? <IconButton 
//           size="small"
//           onClick={() => API.deleteBook(props._id)}
//           >
//           <DeleteIcon /> 
//         </IconButton>
//         : <IconButton 
//             size="small"
//             onClick={() => API.saveBook(props.book)}
//             >
//             <AddIcon /> 
//           </IconButton> 
    {/* <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography> */}






    {/* <Button onClick={() => API.saveBook(title, author, description, image, link)}>
        Save
      </Button>
      <Button size="small" color="primary">
        <a href={link} >Link</a>
      </Button>
      <Button onClick={()=> API.deleteBook(id)} size="small" color="primary">
        Delete
      </Button> */}