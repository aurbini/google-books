import React, { useReducer, useEffect, useCallback } from 'react';

import { useBooksContext } from '../store/booksState'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import API from '../utils/api'
import SearchForm from '../components/SearchForm'
import booksReducer from '../store/reducers/booksReducer';
import useHttp from '../hooks/http';
import BooksSearchedList from '../components/BooksSearchedLIst';
import backgroundImage from '../images/wallpaper.jpeg'

export default function Home(){
  const [ booksState, booksDispatch ] = useBooksContext()
 
  const classes = useStyles()
  const [ , dispatch ] = useReducer (booksReducer, []);
  const {
    isLoading,
    error,
    data,
    reqExtra,
    reqIdentifer
  } = useHttp()

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === 'REMOVE_INGREDIENT') {
      dispatch({ type: 'DELETE', id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === 'ADD_INGREDIENT') {
      dispatch({
        type: 'ADD',
        ingredient: { id: data.name, ...reqExtra }
      });
    }
  }, [data, reqExtra, reqIdentifer, isLoading, error]);

  let booksSearched = null
  if(booksState.searched.length > 0){
    booksSearched = true
  }
  const searchBooksHandler = useCallback(loadedBooks => {
    booksDispatch({type: 'SET', books: loadedBooks})
    }, [])

  const addBookHandler = (book) => () => { 
    API.saveBook(book)
  }

  return (
    <div className={classes.mainContentContainer}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Books App
        </Typography>
        <Typography variant="h5" align="center" color="textPrimary" paragraph>
          Search for any books that you are interested in adding to your books to read collection. 
        </Typography>
        <SearchForm 
          className={classes.searchForm} 
          onSearchBooks={searchBooksHandler}
        />
      </Container>
      <Container maxWidth="md" className={classes.listContainer}>
        {booksSearched && <BooksSearchedList
                            onSearchBooks={searchBooksHandler}
                            booksList={booksState.searched}
                            onAddBook={addBookHandler}
        />}
        
      </Container>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  mainContentContainer: {
    flexGrow: 1,
    backgroundImage: `url(${backgroundImage})`, 
    height: '100vh', 
    width: '100%',
    justifyContent: 'center'
    }, 
    FormContainer: {
      backgroundColor: 'white'
    }, 
    listContainer: {
      marginTop: '2em'
    }
  }
));