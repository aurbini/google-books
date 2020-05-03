import React, { createContext, useReducer, useContext } from "react";


const booksContext = createContext();
const { Provider } = booksContext;

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
  case "ADDBOOK":
    return  [
      ...state, 
       action.payload,
    ]
  case "SAVEDBOOKS": 
    return [
      ...action.payload 
    ]
  case "DELETEBOOK":
    return [
      ...state.filter(book => book._id != action.payload)
    ]
  default: 
    return state
  }
}

const BooksProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, [])
  return <Provider value={[state, dispatch]} {...props} />;
}

const useBooksContext = () => {
  return useContext(booksContext);
}

export { BooksProvider, useBooksContext };