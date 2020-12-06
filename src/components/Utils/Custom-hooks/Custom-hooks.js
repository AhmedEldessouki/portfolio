import React from 'react'

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false)

  React.useLayoutEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])

  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  )
}

function asyncReducer(state, action) {
  switch (action.type) {
    case 'idle': {
      return {status: 'idle'}
    }
    case 'pending': {
      return {status: 'pending'}
    }
    case 'resolved': {
      return {status: 'resolved'}
    }
    case 'rejected': {
      return {status: 'rejected'}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function useAsync(initialState) {
  const [{status}, unsafeDispatch] = React.useReducer(asyncReducer, {
    status: 'idle',
    ...initialState,
  })

  const dispatch = useSafeDispatch(unsafeDispatch)

  return {
    status,
    dispatch,
  }
}

export {useAsync}
