import React, { Component } from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const Hero = () => {
  const classes = useStyles()
  return (  
    <Grid item xs={12} >
      <Paper className={classes.Paper}> 
        <Typography 
          variant="h3"
          className={classes.Heading}
        >Search for a Book
        </Typography>
      </Paper>
    </Grid>
  );
}
 
const useStyles = makeStyles(theme => ({
  Paper: {
    width: '100%',
    height: '100px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center', 
    justifyContent: 'center'
  }
}))

export default Hero;