import React from 'react';
import { Grid, Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Home  from '../pages/Home'; 



const useStyles = makeStyles({
  root: {
    justifyContent: 'center'
  },
  navTab: {
    color: "white", 
    border: "1px solid black", 
    position: 'static'
  }, 
  typographyStyles: {
    flex: 3, 
  }, 
  grid: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default props => {
  const classes = useStyles(); 
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography xs={12} variant='h4' className={classes.typographyStyles}>MyBooks</Typography>
        <Grid container xs={12} sm={3} direction="row" className={ classes.grid } >
          <Button component={Link} to="/Home">
            <HomeIcon   /></Button>  
          <Link style={{textDecoration: 'none', alignItems: 'center', color: 'white'}} to='/saved'>
            <Typography style={{fontSize: '20px'}}>Saved</Typography>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>

  )
}


{/* 


// <Grid container xs={12} className={classes.nav} direction="row">
    //   <Grid item xs={6} className={classes.navTab}>
    //     <Typography color="">GoogleBooks</Typography>
    //   </Grid>
    //   <Grid item xs={2} className={classes.navTab}>Home</Grid>
    //   <Grid item xs={2} className={classes.navTab}>Saved</Grid>
    //   <Grid item xs={2} className={classes.navTab}>Login</Grid>
    // </Grid>  */}
