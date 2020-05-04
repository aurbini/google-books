import React from 'react';
import { render }from 'react-dom';
import App from './App';
import { BooksProvider } from './utils/globalState'


render(
  <BooksProvider>
    <App />
  </BooksProvider>
  , document.getElementById('root'));


