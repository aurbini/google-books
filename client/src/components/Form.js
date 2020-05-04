import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  TextField, Button, FormControl } from '@material-ui/core';

const Form = (props) => {
  const classes = useStyles()
  const [ input, setInput ] = useState()
  return (
    <FormControl className={classes.Form}> 
      <TextField
        onChange={(e) => setInput({value: e.target.value})}
        style={{color: 'white'}}
        style={{width: '400px'}}
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined"
        name="search"
      />
      <Button
        style={{marginTop: '2rem'}}
        variant="contained"
        color="primary"
        onClick={() => props.searchBook(input)}
      >Submit Button
      </Button>
    </FormControl>
  )
}
 
export default Form;

const useStyles = makeStyles(theme => ({ 
  Form: {
    marginTop: '2rem'
  }
}))
