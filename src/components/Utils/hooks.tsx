import React from 'react'

function useSafeDispatch(dispatch: React.Dispatch<IAction>) {
  const mounted = React.useRef(false)

  React.useLayoutEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  return React.useCallback(
    (action: IAction): React.Dispatch<IAction> | void =>
      mounted.current ? dispatch(action) : undefined,
    [dispatch],
  )
}

function useLocalStorageState(
  key: string,
  defaultValue: Object,
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

interface IAction {
  type: 'idle' | 'pending' | 'resolved' | 'rejected'
  payload?: Object | Array<any> | string | boolean
}

function asyncReducer(state: useAsyncState, action: IAction) {
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
interface useAsyncState {
  status?: string
}

interface useAsyncReturn {
  isIdle: boolean
  isLoading: boolean
  isSuccess: boolean
  isRejected: boolean

  status: string
  dispatch: React.Dispatch<IAction>
}

function useAsync(initialState?: useAsyncState): useAsyncReturn {
  const initialStateRef = React.useRef({
    ...{status: 'idle'},
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
