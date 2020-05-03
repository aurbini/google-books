
const express = require("express");
const app = express();
const routes = require("./routes"); 

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
app.use('/public', express.static('public'));

app.use(routes)

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build")); 
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
})

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});










// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// )

// const Book = mongoose.model('book', new mongoose.Schema(
//   {
//     title: 'string',
//     author: 'string', 
//     description: 'string', 
//     image: 'string',
//     link: 'string',
//   }
// ))




// app.post("/api/book", async(req, res) => {
//   const book = await Book.create({
//     title: req.body.title, 
//     author: req.body.author,
//     description: req.body.description, 
//     image: req.body.image, 
//     link: req.body.link
//   })
//   res.json(book); 
// })

// //save books api
// app.get("/api/book", async(req, res) =>{
//   const books = await Book.find({});
//   res.json(books); 
// })

// app.delete("/api/book/:id", async(req, res)=>{
//   // console.log(req.params.id)
//   // Book.findById({_id: req.params.id})
//   // .then(dbModel => dbModel.remove())
//   // .then(db => res.)
//   const findBook = await Book.findById({_id: req.params.id});
//   const removedBook = await findBook.remove();
//   res.json(removedBook)
// })

