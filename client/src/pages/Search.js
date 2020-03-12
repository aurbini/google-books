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

  const [ saved, setSaved] = useState(); 
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

      const search = data.items.filter(book =>
        book.volumeInfo.title &&
        book.volumeInfo.authors &&
        book.volumeInfo.description &&
        book.volumeInfo.imageLinks.smallThumbnail &&
        book.volumeInfo.infoLink
      )
       console.log(search);
      // const items = search.items
      const books = search.map(book=>({
        title: book.volumeInfo.title,
        description:  book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.smallThumbnail,
        link: book.volumeInfo.infoLink,
        author: book.volumeInfo.authors
      }))
      console.log(books);


      setBooks(books); 
    };
  }
  async function saveBook(title, author, description, image, link){
    const Author = author[0]
    const book = {
          title, 
          Author, 
          description, 
          image, 
          link
        }
        console.log(book); 
        const savedBooks = await axios.post("/api/book", book)
      }

  const renderBooks =()=>{
  return books.map((book) =>{
    const {title, author, description, image, link} = book
    return(
      <Grid item sm={6} xs={12} spacing={3}>
        <BookCard saveBook={saveBook} title={title} author={author} description={description} image={image} link={link}/>
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





      // const books = items.map(book=>{
      //   return {
      //     title: book.volumeInfo.title,
      //     description: book.volumeInfo.description, 
      //     link: book.volumeInfo.infoLink,
      //     author: book.volumeInfo.imageLink.smallThumbnail
      //   }
      // })
      // console.log(books); 
      // const book = 
      //   {
      //     title: data.items[0].volumeInfo.title,
      //     description:  data.items[0].volumeInfo.description,
      //     image: data.items[0].volumeInfo.imageLinks.thumbnail,
      //     link: data.items[0].volumeInfo.infoLink,
      //     author:data.items[0].volumeInfo.authors[0], 
      //   } 
      