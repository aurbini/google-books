import React from "react"; 
import {useContext, useEffect, useState} from 'react';
import axios from "axios"; 
import BookCard from "../components/Card"



function Saved (){
  const [ books, setBooks] = useState([]); 


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
        <BookCard title={title} author={author} description={description} image={image} link={link} />
       )
      })
  
    }



  return (
    <div>
      <h1>Saved Books</h1>
      { books ? renderBooks() : "no books" }

    </div>
  )

}

export default Saved; 