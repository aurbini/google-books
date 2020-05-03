import axios from 'axios'

export default {
  getBooks: function(book){
    return (
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
      .then(res => res.data)
    )
  }, 
  saveBook: function(book){
    return axios.post('/api/books', book)
  },
  deleteBook: function(id){
    return axios.delete(`/api/books/${id}`)
  },
  getSavedBooks: function(){
    return axios.get('/api/books')
  }
}



