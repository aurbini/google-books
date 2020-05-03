import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./components/Saved";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import React from "react"; 
import { BooksProvider } from './utils/globalState'


function App(){
  return (
    <Router>
        <Nav /> 
          <BooksProvider>
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/saved" component={Saved} /> 
            </Switch> 
          </BooksProvider>
      </Router>
  )
}



export default App;
