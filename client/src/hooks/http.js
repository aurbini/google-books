import { useReducer, useCallback } from 'react'

const initialState = { 
  loading: false, 
  error: null, 
  data: null, 
  extra: null, 
  identifier: null
}

const httpReducer = (curHttpState, action) => {
  switch(action.type){
    case 'SEND': 
      return {
        loading: true, 
        error: null, 
        data: null, 
        identifier: action.identifier, 
        extra: null
      }
    case 'RESPONSE': 
      return {
        ...curHttpState,
          loading: false, 
          data: action.responseData, 
          extra: action.extra
        }
    case 'ERROR': 
      return { loading: false, error: action.errorMessage }
    default: 
      return curHttpState
  }
}

const useHttp = () => {
  const [ httpState, dispatchHttp ] = useReducer(httpReducer, initialState)

  const sendRequest = useCallback(
    (url, method, body, reqExtra, reqIdentifier ) => {
      dispatchHttp({ type: 'SEND', identifier: reqIdentifier})
      fetch(url, {
        method: method, 
        body: body, 
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(responseData => {
          dispatchHttp({
            type: 'RESPONSE', 
            responseData: responseData, 
            extra: reqExtra
          })
        })
        .catch(error => {
          dispatchHttp({
            type: 'ERROR', 
            errorMessage: 'Something went wrong!'
          })
        })
    }, [] )
  return {
    isLoading: httpState.loading, 
    data: httpState.data, 
    error: httpState.error,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
    reqIdentifer: httpState.identifier
  }
}

export default useHttp













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

