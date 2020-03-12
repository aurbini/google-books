import React, {useContext, useEffect, useState} from 'react';
import axios from "axios"; 
import BookCard from "../components/Card"

function Search (){
  const [ books, setBooks] = useState([]); 
  const [formObject, setFormObject] = useState('')
  
  function handleInputChange(event) {
    const value = event.target.value;
    setFormObject(value)
  };
   
  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject); 
    if (formObject) {
      const { data }  = await axios.request({
        method: 'get', 
        url: `https://www.googleapis.com/books/v1/volumes?q=${formObject}`
      })
      console.log(data); 
      const book = 
        {
          title: data.items[0].volumeInfo.title,
          description:  data.items[0].volumeInfo.description,
          image: data.items[0].volumeInfo.imageLinks.smallThumbnail,
          link: data.items[0].volumeInfo.infoLink,
          author:data.items[0].volumeInfo.authors[0], 
        } 
      
      setBooks([...books, book]); 
    };
  }


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
     <div className="App">
       <div class="jumbotron">
        <h1>What Books Should I Read?</h1>
      </div>
       <form> 
         <input 
          onChange={handleInputChange}
          name="search"
          />
        <button
          onClick={handleFormSubmit}
        >Submit Button
        </button>
      </form>
      <ul>
         { books ? renderBooks() : "no books" }
       </ul>
     </div>
  )
}

export default Search; 




