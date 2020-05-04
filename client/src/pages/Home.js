import React, { Fragment } from 'react';
import { useBooksContext } from '../utils/globalState'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import API from '../utils/api'
import Form from '../components/Form'



export default function Home(){

  const [ state, dispatch ] = useBooksContext()
  const classes = useStyles()

  const searchBook = async (book) => {
    const booksData = await API.getBooks(book.value)
    const books = booksData.items.map(({ volumeInfo })=>({
      title: volumeInfo.title,
      description: volumeInfo.description,
      image: volumeInfo.hasOwnProperty('imageLinks') != false ? 
                    volumeInfo.imageLinks.smallThumbnail
                    : null,
      link: volumeInfo.infoLink,
      author: volumeInfo.authors[0]
    }))
    dispatch({
      type: "SEARCHBOOKS", 
      payload: books
    })
  }

  const addBook = (book) => { 
    API.saveBook(book)
  }
  
    return (
      <Grid container className={classes.root} >
        <Hero /> 
        <Grid container sm='12' className={classes.FormContainer}>
          <Grid item >
          <Form searchBook={searchBook}/>
          </Grid>
        </Grid>
        <Grid 
          container 
          className={classes.cardContainer}
          spacing={1}>
          {state.searched ? 
            state.searched.map(book => (
              <Grid item xs={12} sm={4}>
                <Card book={book} addBook={addBook} /> 
              </Grid>
            ))
            : ""}
        </Grid>
      </Grid>
    )
  }
    
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }, 
    wrapper: {
      height: '100%',
      width: '100%'
    }, 
    FormContainer: {
      justifyContent: 'center', 
    },
    cardContainer: {
      width: "100%",
      marginTop: '2rem',
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }));