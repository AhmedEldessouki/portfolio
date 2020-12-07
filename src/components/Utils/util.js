/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import {jsx, css} from '@emotion/react'
import {colors} from '../Styles'

function ErrorMessage({error, ...props}) {
  return (
    <div
      role="alert"
      css={css`
        color: ${colors.burgundyRed};
      `}
      {...props}
    >
      <span>There was an error: </span>
      <pre
        css={css`
          whitespace: 'break-spaces';
          margin: '0';
          margin-bottom: -5;
        `}
      >
        {error.message}
      </pre>
    </div>
  )
}

/**
 *
 * @param {String} key The key to set in localStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 * @param {{serialize: Function, deserialize: Function}} options The serialize and deserialize functions to use (defaults to JSON.stringify and JSON.parse respectively)
 */

function useLocalStorageState(
  key,
  defaultValue,
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage)
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  const prevKeyRef = React.useRef(key)

  React.useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}
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

export {ErrorMessage, useLocalStorageState, useAsync}
