import React from 'react';
import { render }from 'react-dom';
import App from './app';
import { BooksProvider } from './store/booksState'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { lightBlue, blue } from '@material-ui/core/colors'


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: lightBlue[400],
      light: lightBlue[200],
      dark: lightBlue[700]
    },
    type: 'dark'
  },
  spacing: 10
})

render(
  <BooksProvider>
     <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
  </BooksProvider>
  , document.getElementById('root'));


