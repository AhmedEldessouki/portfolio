/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import {css, jsx} from '@emotion/react'

import {colors, mq, warning, weights} from '../Styles'

function ErrorMessageFallback({error, resetErrorBoundary}) {
  console.log(error)
  return (
    <div role="alert" css={[warning, {background: colors.independenceBlue}]}>
      <p>There was an error: </p>
      <pre>{error.message}</pre>
      <button
        onClick={() => {
          // resetComponentState()
          resetErrorBoundary()
        }}
      >
        Try again
      </button>
    </div>
  )
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

function Title({name = '', onClick, highlight = false, testId, csx}) {
  const title = [
    css`
      padding: 15px 10px;
      font-size: 1.62rem;
      font-weight: ${weights.medium};
      border-radius: 13%;
      margin: 0;
      text-transform: capitalize;
      transition: cubic-bezier(1, 0, 0, 1) 0.5s;
      :hover {
        cursor: pointer;
        font-family: sans-serif;
      }
      ${mq.s} {
        font-size: 1.2rem;
      }
    `,
    {
      background: highlight ? colors.whiteFaded : colors.darkBlue,
      color: highlight ? colors.darkBlue : colors.whiteFaded,
      fontFamily: highlight ? 'sans-serif' : 'sans',
    },
  ]

  return (
    <button
      type="button"
      onClick={() => {
        onClick()
      }}
      css={css`
        background: transparent;
        border: none;
        width: 100%;
      `}
    >
      <h1 css={[title, csx]} data-testid={testId} key={testId}>
        {name}
      </h1>
    </button>
  )
}

export {
  ErrorMessageFallback,
  useSafeDispatch,
  useLocalStorageState,
  useAsync,
  Title,
}
