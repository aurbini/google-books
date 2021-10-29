import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '../UI/Card'
import { makeStyles } from '@material-ui/core/styles';

const BooksSearchedList = ( {booksList, onAddBook} ) => {
  console.log(booksList)
  const classes = useStyles()
  return (
     <Grid 
      container 
      className={classes.cardsContainer}
      spacing={1}>
      {booksList.map(book => (
        <Grid item xs={12} sm={6} md={4}>
          <Card book={book} 
            onClick={onAddBook(book)} 
            buttonText="Add"
          /> 
        </Grid>
      ))
      }
    </Grid> 
  );
}
 
export default BooksSearchedList;


const useStyles = makeStyles(theme => {
  return ({
    cardsContainer: {
      marginTop: '2rem',
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: "10px",
      padding: '2em'
    }
  });
});