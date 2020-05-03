import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, TextField, Button
          , FormControl, Container } from '@material-ui/core';
import API from '../utils/api'
import Card from './Card'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  Paper: {
    height: '100px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center', 
    justifyContent: 'center'
  }, 
  wrapper: {
    height: '100%',
    width: '100%'
  },
  FormContainer: {
    height: '100vh',
    justifyContent: 'center', 
    backgroundColor: '#eee'
  }, 
  Form: {
    marginTop: '2rem'
  }
}));

function Search (){
  const classes = useStyles()
  const [ input, setInput ] = useState()
  const [ searchBooks, setSearchBooks ] = useState(false)
  const searchBook = async (book) => {
    const booksData = await API.getBooks(book.value)
    console.log(booksData)
    const books = booksData.items.map(({ volumeInfo })=>({
      title: volumeInfo.title,
      description: volumeInfo.description,
      image: volumeInfo.readingModes.image ? 
             volumeInfo.imageLinks.smallThumbnail 
             : null,
      link: volumeInfo.infoLink,
      author: volumeInfo.authors[0]
    }))
    setSearchBooks([
      ...books
    ])
  }

  return (
    <Grid container className={classes.root} >
      <Grid item xs={12} >
        <Paper className={classes.Paper}> 
          <Typography 
            variant="h3"
            className={classes.Heading}
          >Search for a Book
          </Typography>
        </Paper>
      </Grid>
      <Grid container sm='12' className={classes.FormContainer}>
        <Grid item >
          <FormControl className={classes.Form}> 
            <TextField
              onChange={(e) => setInput({value: e.target.value})}
              style={{color: 'white'}}
              style={{width: '400px'}}
              id="outlined-basic" 
              label="Outlined" 
              variant="outlined"
              // onChange={handleInputChange}
              name="search"
              />
            <Button
              style={{marginTop: '2rem'}}
              variant="contained"
              color="primary"
              onClick={() => searchBook(input)}
            >Submit Button
            </Button>
          </FormControl>
        </Grid>
        <Grid 
          container 
          style={{width: "90%", marginTop: '2rem'}}
          spacing={1}>
          {searchBooks ? 
            searchBooks.map(book => (
              <Grid item xs={12} sm={4}>
                <Card book={book} /> 
              </Grid>
            ))
            : ""}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Search; 






 
// async function handleFormSubmit(event) {
//   event.preventDefault();
//   console.log(formObject); 
//   if (formObject) {
//     const { data }  = await axios.request({
//       method: 'get', 
//       url: `https://www.googleapis.com/books/v1/volumes?q=${formObject}`
//     })
//     console.log(data);

//     const search = data.items.filter(book =>
//       book.volumeInfo.title &&
//       book.volumeInfo.authors &&
//       book.volumeInfo.description &&
//       book.volumeInfo.imageLinks.smallThumbnail &&
//       book.volumeInfo.infoLink
//     )
//      console.log(search);
//     // const items = search.items
//     const books = search.map(book=>({
//       title: book.volumeInfo.title,
//       description:  book.volumeInfo.description,
//       image: book.volumeInfo.imageLinks.smallThumbnail,
//       link: book.volumeInfo.infoLink,
//       author: book.volumeInfo.authors
//     }))
//     console.log(books);


//     setBooks(books); 
//   };
// }
// async function saveBook(title, author, description, image, link){
//   const Author = author[0]
//   const book = {
//         title, 
//         Author, 
//         description, 
//         image, 
//         link
//       }
//       console.log(book); 
//       const savedBooks = await axios.post("/api/book", book)
//     }

// const renderBooks =()=>{
// return books.map((book) =>{
//   const {title, author, description, image, link} = book
//   return(
//     <Grid item sm={6} xs={12} spacing={3}>
//       <BookCard saveBook={saveBook} title={title} author={author} description={description} image={image} link={link}/>
//     </Grid>
//    )
//   })
// }


      