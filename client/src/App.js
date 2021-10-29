import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import React from "react"; 
import Nav from "./components/Nav";
import { BooksProvider } from "./store/booksState";
import { CssBaseline } from "@material-ui/core";


function App(){

  return (
    <Router>
      <BooksProvider >
        <CssBaseline />
        <Nav /> 
          <Switch>
            <Route exact path="/Home" render={()=> <Home />} />
            <Route exact path="/saved" component={Saved} /> 
            <Route path="" component={Home} />
          </Switch> 
      </BooksProvider >
    </Router>
  )
}



export default App;