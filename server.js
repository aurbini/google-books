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

