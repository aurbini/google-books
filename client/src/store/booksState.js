import React, { createContext, useReducer, useContext } from "react";
import booksReducer from './reducers/booksReducer'

const booksContext = createContext();
const { Provider } = booksContext;

console.log(booksReducer)

const BooksProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(booksReducer, {
    saved: [], 
    searched: []
  })
  return <Provider value={[state, dispatch]} {...props} />;
}

const useBooksContext = () => {
  return useContext(booksContext);
}

export { BooksProvider, useBooksContext };