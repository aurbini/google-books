
const booksReducer = ( books, action) => {
  switch (action.type) {
    case 'SET':
      console.log('loading books')
      return {
        searched: action.books,
        saved: []
      };
    case 'GET': 
      return books
    case 'ADD':
      return [...books, action.ingredient];
    case 'DELETE':
      return books.saved.filter(book => book._id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
};

export default booksReducer











// export const booksReducer = (state, action) => {
//   // eslint-disable-next-line default-case
//   switch (action.type) {
//   case "SEARCHBOOKS":
//     return {
//       ...state, 
//       searched: action.payload
//     }
//   case "ADDBOOK":
//     return  {
//       ...state, 
//       saved: [ ...state.saved, action.payload ] 
//     }
//   case "SAVEDBOOKS": 
//     return {
//       ...state, 
//       saved: [ ...action.payload]
//     }
    
//   case "DELETEBOOK":
//     return {
//       ...state,
//       saved: state.saved.filter(book => book._id != action.payload)
//   }
//   default: 
//     return state
//   }
// }

