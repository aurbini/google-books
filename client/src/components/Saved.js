import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, TextField, Button
          , FormControl, Container } from '@material-ui/core';
import API from '../utils/api'
import Card from './Card'
import { useBooksContext } from '../utils/globalState'

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

const Saved = () => {

  const [ state, dispatch] = useBooksContext()
  const classes = useStyles()
  // const [ savedBooks, setSavedBooks ] = useState([])
  console.log(state)

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
      <Grid container sm='12' className={classes.FormContainer}>
        <Grid item >
        </Grid>
        <Grid 
          container 
          style={{width: "90%", marginTop: '2rem'}}
          spacing={1}>
          {state ? 
            state.map(book => (
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