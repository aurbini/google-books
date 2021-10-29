// import React, { createContext, useReducer, useContext } from "react";
// import { authReducer } from './reducers/booksReducer'

// const authContext = createContext();
// const { Provider } = booksContext;

// console.log(booksReducer)

// const AuthProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useReducer(booksReducer, {
//     saved: [], 
//     searched: []
//   })
//   return <Provider value={[state, dispatch]} {...props} />;
// }

// const useBooksContext = () => {
//   return useContext(booksContext);
// }

// export { BooksProvider, useBooksContext };