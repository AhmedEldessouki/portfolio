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

export {ErrorMessage, useLocalStorageState}
