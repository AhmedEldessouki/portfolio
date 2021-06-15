import React from 'react'

import type {Status} from '../../types/interfaces'

interface IAction<T, S> {
  type: T
  payload?: S
}
function useSafeDispatch<T, S>(dispatch: React.Dispatch<IAction<T, S>>) {
  const mounted = React.useRef(false)

  React.useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  return React.useCallback(
    (action: IAction<T, S>): React.Dispatch<IAction<T, S>> | void =>
      mounted.current ? dispatch(action) : undefined,
    [dispatch],
  )
}

type UseLocalStorageOptions = {
  serialize?: typeof JSON.stringify
  deserialize?: typeof JSON.parse
}

function useLocalStorageState<TState>(
  key: string,
  defaultValue: TState,
  {
    serialize = JSON.stringify,
    deserialize = JSON.parse,
  }: UseLocalStorageOptions = {},
) {
  const [state, setState] = React.useState<TState>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage)
    }
    return defaultValue instanceof Function ? defaultValue() : defaultValue
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

  return {state, setState}
}

type UseAsyncState =
  | {
      status: 'rejected'
      error?: Error
      data?: undefined
    }
  | {
      status: 'resolved'
      data?: unknown
      error?: undefined
    }
  | {
      status: 'idle' | 'pending'
      error?: undefined
      data?: unknown
    }
type SomeType = IAction<Status, {error?: Error; data?: unknown} | undefined>

function asyncReducer(state: UseAsyncState, action: SomeType): UseAsyncState {
  switch (action.type) {
    case 'idle': {
      console.log(`['idle']`, state)
      return {status: 'idle', data: undefined, error: undefined}
    }
    case 'pending': {
      console.log(`['pending']`, state)
      return {status: 'pending', data: undefined, error: undefined}
    }
    case 'resolved': {
      console.log(`['resolved']`, state)
      return {status: 'resolved', data: action.payload?.data, error: undefined}
    }
    case 'rejected': {
      console.log(`['rejected']`, state)
      return {status: 'rejected', data: undefined, error: action.payload?.error}
    }
    default: {
      throw new Error(`Check useAsync Reducer Cases`)
    }
  }
}

type UseAsyncReturn = {
  isIdle: boolean
  isLoading: boolean
  isSuccess: boolean
  isRejected: boolean

  status: Status
  setData: (data: unknown) => void | React.Dispatch<SomeType>
  setError: (data: Error) => void | React.Dispatch<SomeType>
  error?: Error
  data?: unknown
  run: (promise: unknown) => void
  dispatch: React.Dispatch<SomeType>
}

function useAsync({
  initialStatus,
}: {
  initialStatus?: Status
} = {}): UseAsyncReturn {
  const [state, unsafeDispatch] = React.useReducer(asyncReducer, {
    status: initialStatus ?? 'idle',
    data: undefined,
    error: undefined,
  })

  const dispatch = useSafeDispatch(unsafeDispatch)
  const run = React.useCallback(
    promise => {
      dispatch({type: 'pending'})
      promise.then(
        (data: unknown) => {
          dispatch({type: 'resolved', payload: {data}})
        },
        (err: Error) => {
          dispatch({type: 'rejected', payload: {error: err}})
        },
      )
    },
    [dispatch],
  )

  const setData = React.useCallback(
    newData => dispatch({type: 'resolved', payload: newData}),
    [dispatch],
  )
  const setError = React.useCallback(
    (err: Error) => dispatch({type: 'rejected', payload: {error: err}}),
    [dispatch],
  )
  const {data, error, status} = state

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isRejected: status === 'rejected',

    setData,
    setError,
    error,
    status,
    data,
    run,
    dispatch,
  }
}

export {useSafeDispatch, useLocalStorageState, useAsync}
