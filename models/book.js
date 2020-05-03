const Mongoose = require('mongoose'); 
const Schema = Mongoose.Schema; 


const BookSchema = new Schema({
  title: 'string',
  author: 'string', 
  description: 'string', 
  image: 'string',
  link: 'string',
})

const Book = Mongoose.model("Book", BookSchema);

module.exports = Book; 