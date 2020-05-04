import React, { Fragment } from 'react';
import Saved from '../components/Saved'

export default function Home(){
  return (
    <Saved /> 
  )
}
















// import React from "react"; 
// import {useContext, useEffect, useState} from 'react';
// import axios from "axios"; 
// import BookCard from "../components/Card"
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// const Saved =() => {
//   const [ books, setBooks] = useState([]); 
//   const classes = useStyles();
//   // const [deletedBook, setDeletedBook] = useState(); 

//   useEffect (()=>{
//     async function fetchData(){
//       const {data} = await axios.get("/api/book"); 
//       console.log(data)

//       setBooks(data);
//       console.log(books); 
//     }
//     fetchData()
//   }, [])

//   const deleteBook = async (id) =>{
//     console.log(id); 
//     const res = await axios.delete("/api/book/"+id); 
//     console.log(res);
//     loadBooks(); 
//   }

//   async function loadBooks(){
//     const {data} = await axios.get("/api/book");
//     console.log('load not deleted')
//     setBooks(data); 
//   }

//   const renderBooks =()=>{
//     console.log(books); 
//     return books.map((book) =>{
//       const {_id, title, author, description, image, link} = book
//       console.log(_id); 
//       return(
//         <Grid item sm={6} xs={12} spacing={3}>
//           <BookCard id={_id} deleteBook={deleteBook} title={title} author={author} description={description} image={image} link={link} />
//         </Grid>
//        )
//       })
  
//     }



//   return (
//     <Grid container={classes.root} spacing={3}>
      
//       { books ? renderBooks() : "no books" }

//     </Grid>
//   )

// }

// export default Saved; 