import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./components/Saved";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import React from "react"; 
import './app.css'

function App(){



  return (
    <Router>
        <Nav /> 
          <Switch>
            <Route exact path="/Home" render={()=> <Home />} />
            <Route exact path="/saved" component={Saved} /> 
          </Switch> 
      </Router>
  )
}



export default App;
