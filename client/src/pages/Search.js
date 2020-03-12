import React, {useContext, useEffect, useState} from 'react';
import axios from "axios"; 
import BookCard from "../components/Card"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Search (){
  const classes = useStyles();


  const [ books, setBooks] = useState([]); 
  const [formObject, setFormObject] = useState('')
  
  function handleInputChange(event) {
    const value = event.target.value;
    setFormObject(value)
  };
   
  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject); 
    if (formObject) {
      const { data }  = await axios.request({
        method: 'get', 
        url: `https://www.googleapis.com/books/v1/volumes?q=${formObject}`
      })
      console.log(data); 
      const book = 
        {
          title: data.items[0].volumeInfo.title,
          description:  data.items[0].volumeInfo.description,
          image: data.items[0].volumeInfo.imageLinks.smallThumbnail,
          link: data.items[0].volumeInfo.infoLink,
          author:data.items[0].volumeInfo.authors[0], 
        } 
      
      setBooks([...books, book]); 
    };
  }


  const renderBooks =()=>{
  console.log(books); 
  return books.map((book) =>{
    const {title, author, description, image, link} = book
    return(
      <Grid item sm={6} xs={12} spacing={3}>
        <BookCard title={title} author={author} description={description} image={image} link={link} />
      </Grid>
     )
    })

  }


  return (
     <div className="App">
       <div class="jumbotron">
        <h1>What Books Should I Read?</h1>
      </div>
       <form> 
         <TextField
          id="outlined-basic" 
          label="Outlined" 
          variant="outlined"
          onChange={handleInputChange}
          name="search"
          />
        <Button
          variant="contained"
          color="primary"
          onClick={handleFormSubmit}
        >Submit Button
        </Button>
      </form>
      <ul>
      <Grid container={classes.root} spacing={3}>
         { books ? renderBooks() : "no books" }
      </Grid>
       </ul>
     </div>
  )
}

export default Search; 




