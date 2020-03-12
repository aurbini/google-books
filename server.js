
const express = require("express");
const path = require("path");
const app = express();

const mongoose = require("mongoose"); 
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)

const Book = mongoose.model('book', new mongoose.Schema(
  {
    title: 'string',
    author: 'string', 
    description: 'string', 
    image: 'string',
    link: 'string',
  }
))


app.post("/api/book", async(req, res) => {
  const book = await Book.create({
    title: req.body.title, 
    author: req.body.author,
    description: req.body.description, 
    image: req.body.image, 
    link: req.body.link
  })
  res.json(book); 
})

//save books api
app.get("/api/book", async(req, res) =>{
  const books = await Book.find({});
  res.json(books); 
})


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
})