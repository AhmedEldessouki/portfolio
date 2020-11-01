import * as React from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'idle':
      return {status: 'idle'}
    case 'pending':
      return {status: 'pending'}
    case 'ready':
      return {...state.data, status: 'ready'}
    case 'error':
      throw state.error

    default:
      throw new Error(
        `Something Went Wrong In the useAsync. called with ${action.type}`,
      )
  }
}

function useAsync() {
  const [{data, status, error}, dispatch] = React.useReducer(reducer, {
    data: null,
    status: 'idle',
    error: null,
  })
  return [data, status, error, dispatch]
}

export default useAsync
