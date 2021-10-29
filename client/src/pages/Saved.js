import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';
import API from '../utils/api'
import { useBooksContext } from '../store/booksState'
import Card from '../UI/Card'
import backgroundImage from '../images/wallpaper.jpeg'

const Saved = () => {

  const [ booksState, dispatch] = useBooksContext()
  const classes = useStyles()
  useEffect(() => {
    getBooks()
  },[])

  const getBooks = () => {
    API.getSavedBooks()
      .then(res => {
        dispatch({
          type: "SET", 
          books: res.data
        })
      })
  }
 
  const removeBookHandler = (id) => () => { 
    console.log(id)
    API.deleteBook(id)
      .then(res => {
        dispatch({
          type: "DELETE",
          payload: id
        })
      })
  }
  return (
    <Grid container className={classes.root} >
      <Grid item xs={12} >
        <Paper className={classes.Paper}> 
          <Typography 
            variant="h3"
            className={classes.Heading}
          >Saved Books
          </Typography>
        </Paper>
      </Grid>
      <Grid container sm='12' className={classes.cardContainer}>
        <Grid item >
        </Grid>
        <Grid 
          container 
          style={{width: "90%", marginTop: '2rem'}}
          spacing={1}>
          {booksState.saved ? 
            booksState.saved.map(book => (
              <Grid item xs={12} sm={4}>
                <Card book={book} onClick={removeBookHandler(book._id)} buttonText="delete"/> 
              </Grid>
            ))
            : ""}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Saved; 


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${backgroundImage})`
  },
  Paper: {
    backgroundImage: `url(${backgroundImage})`,
    height: '100px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  cardContainer: {
    height: '100vh',
    justifyContent: 'center', 
  }
}));