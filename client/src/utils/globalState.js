import React, { createContext, useReducer, useContext } from "react";


const booksContext = createContext();
const { Provider } = booksContext;

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
  case "SEARCHBOOKS":
    return {
      ...state, 
      searched: action.payload
    }
  case "ADDBOOK":
    return  {
      ...state, 
      saved: [ ...state.saved, action.payload ] 
    }
  case "SAVEDBOOKS": 
    return {
      ...state, 
      saved: [ ...action.payload]
    }
    
  case "DELETEBOOK":
    return {
      ...state,
      saved: state.saved.filter(book => book._id != action.payload)
  }
  default: 
    return state
  }
}

const BooksProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    saved: [], 
    searched: []
  })
  return <Provider value={[state, dispatch]} {...props} />;
}

const useBooksContext = () => {
  return useContext(booksContext);
}

export { BooksProvider, useBooksContext };