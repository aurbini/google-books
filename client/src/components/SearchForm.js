import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, Button, FormControl, Grid } from '@material-ui/core';
import useHttp from '../hooks/http';

const SearchForm = ({ onSearchBooks }) => {
  const inputRef = useRef()
  const classes = useStyles()  
  const { isLoading, data, error, sendRequest } = useHttp()
  
  const searchBooksHandler = (event) => {
    event.preventDefault()
    sendRequest(`https://www.googleapis.com/books/v1/volumes?q=${inputRef.current.value}`, 
      'GET')
  }
  const searchBookErrorHandler = () => {
    alert('error loading books please try searching again')
  }

  useEffect(() => {
    if(typeof data !== "undefined"){
      console.log('should be data')
    }
    if (!isLoading && !error && data) {
      if(data.error){ 
        console.log('search books')
        searchBookErrorHandler()
      }else{
      const loadedBooks = data.items.map(({ volumeInfo })=>({
        title: volumeInfo.title,
        description: volumeInfo.description,
        image: volumeInfo.hasOwnProperty('imageLinks') !== false ? 
                      volumeInfo.imageLinks.smallThumbnail
                      : null,
        link: volumeInfo.infoLink,
        author: volumeInfo.authors[0]
      }))
      onSearchBooks(loadedBooks);}
    };
  }, [ data, error, isLoading, onSearchBooks ]);

  return (
    <form 
      className={classes.form}
      onSubmit={searchBooksHandler }
    >
      <Grid className={classes.heading}>
      </Grid>
      <FormControl className={classes.Form}> 
            <InputBase
              className={classes.inputBase}
              placeholder="Book Title"
              inputRef={inputRef}
              id="outlined-basic" 
              label="Book Title" 
              variant="outlined"
              name="search"
            />
            <Button
              style={{marginTop: '2rem'}}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit Button
            </Button>
          </FormControl>
    </form>
   
  )
}
 
export default SearchForm;

const useStyles = makeStyles(theme => ({ 
  form: {
    backgroundColor: 'white',
    marginTop: '2rem', 
    display: 'flex', 
    justifyContent: 'center', 
    flexDirection: 'column',
    padding: '1em', 
    borderRadius: '10px'
  }, 
  inputBase: {
    color: 'black',
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: "25px", 
    padding: theme.spacing(2), 
    height: "6vh"
  }
}))
