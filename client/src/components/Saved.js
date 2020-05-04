import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';
import API from '../utils/api'
import Card from './Card'
import { useBooksContext } from '../utils/globalState'


const Saved = () => {

  const [ state, dispatch] = useBooksContext()
  const classes = useStyles()


  const removeBook = (id) => { 
    API.deleteBook(id)
      .then(res => {
        dispatch({
          type: "DELETEBOOK",
          payload: id
        })
      })
  }

  const getBooks = () => {
    API.getSavedBooks()
      .then(res => {
        dispatch({
          type: "SAVEDBOOKS", 
          payload: res.data
        })
      })
  }

  useEffect(() => {
    getBooks()
  },[])
 
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
          {state.saved ? 
            state.saved.map(book => (
              <Grid item xs={12} sm={4}>
                <Card book={book} removeBook={removeBook} /> 
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
  cardContainer: {
    height: '100vh',
    justifyContent: 'center', 
    backgroundColor: '#eee'
  }, 
  Form: {
    marginTop: '2rem'
  }
}));