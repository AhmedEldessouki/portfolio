/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'

import type {Status} from '../../types/interfaces'

function useSafeDispatch<T, S>(dispatch: React.Dispatch<IAction<T, S>>) {
  const mounted = React.useRef(false)

  React.useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  return React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    (action: IAction<T, S>): React.Dispatch<IAction<T, S>> | void =>
      mounted.current ? dispatch(action) : undefined,
    [dispatch],
  )
}

type UseLocalStorageOptions<TState> = {
  serialize?: (data: TState) => string
  deserialize?: (str: string) => TState
}

function useLocalStorageState<TState>(
  key: string,
  defaultValue: TState,
  {
    serialize = JSON.stringify,
    deserialize = JSON.parse,
  }: UseLocalStorageOptions<TState> = {},
) {
  const [state, setState] = React.useState(() => {
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

  return [state, setState]
}

interface IAction<T, S> {
  type: T
  payload?: S
}

function asyncReducer(
  state: useAsyncReducerState,
  action: IAction<Status, unknown>,
) {
  switch (action.type) {
    case 'idle': {
      state.status = 'idle'
      return {...state}
    }
    case 'pending': {
      state.status = 'pending'
      return {...state}
    }
    case 'resolved': {
      state.status = 'resolved'
      return {...state}
    }
    case 'rejected': {
      state.status = 'rejected'
      return {...state}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
interface useAsyncReducerState {
  status: Status
}

interface useAsyncProps {
  isIdle: boolean
  isLoading: boolean
  isSuccess: boolean
  isRejected: boolean

  status: Status
  dispatch: React.Dispatch<IAction<Status, unknown>>
}

function useAsync(
  initialState: useAsyncReducerState = {status: 'idle'},
): useAsyncProps {
  const initialStateRef = React.useRef({
    ...initialState,
  })
  const [state, unsafeDispatch] = React.useReducer(
    asyncReducer,
    initialStateRef.current,
  )

  const dispatch = useSafeDispatch(unsafeDispatch)
  const {status} = state
  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isRejected: status === 'rejected',

    status,
    dispatch,
  }
}

export {useSafeDispatch, useLocalStorageState, useAsync}
