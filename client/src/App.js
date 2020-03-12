import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved"; 
import Search from "./pages/Search";
import Nav from "./components/Nav";
import React from "react"; 

function App(){
  return (
    <BrowserRouter>
      <div> 
        <Switch>
          <Route exact path="/">
            <Nav />
            <Search />
          </Route>  
          <Route exact path="/book/saved">
            <Nav />
            <Saved />
          </Route>
        </Switch> 
      </div>
    </BrowserRouter>
  )
}



export default App;
