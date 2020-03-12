import React from "react"; 
import {useContext, useEffect, useState} from 'react';
import axios from "axios"; 
import BookCard from "../components/Card"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Saved (){
  const [ books, setBooks] = useState([]); 
  const classes = useStyles();

  useEffect (()=>{
    async function fetchData(){
      const {data} = await axios.get("/api/book"); 
      console.log(data)
      setBooks(data); 
    }
    fetchData()
  }, [])

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
    <Grid container={classes.root} spacing={3}>
      
      { books ? renderBooks() : "no books" }

    </Grid>
  )

}

export default Saved; 