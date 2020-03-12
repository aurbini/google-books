import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


function Navbar(){
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Typography variant="h6" color="inherit">
      <Link to="/">Home</Link>
      </Typography>
      <Typography variant="h6" color="inherit">
      <Link to="/book/saved">Saved</Link>
      </Typography>
    </AppBar>

  )
}

export default Navbar; 


  // <nav class="navbar navbar-expand-lg navbar-light bg-light">
  //   <a class="navbar-brand" href="#">Navbar</a>
  //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //     <span class="navbar-toggler-icon"></span>
  //   </button>
  //   <div class="collapse navbar-collapse" id="navbarNav">
  //     <ul class="navbar-nav">
  //       <li class="nav-item active">
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li class="nav-item">
  //         <Link to="/book/saved">Saved</Link>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>