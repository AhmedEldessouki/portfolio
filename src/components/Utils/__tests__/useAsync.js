import {renderHook, act} from '@testing-library/react-hooks'
import {useAsync} from '../hooks'

const defaultState = {
  status: 'idle',

  isIdle: true,
  isLoading: false,
  isRejected: false,
  isSuccess: false,

  dispatch: expect.any(Function),
}

const pendingState = {
  ...defaultState,
  status: 'pending',
  isIdle: false,
  isLoading: true,
}

const resolvedState = {
  ...defaultState,
  status: 'resolved',
  isIdle: false,
  isSuccess: true,
}

const rejectedState = {
  ...defaultState,
  status: 'rejected',
  isIdle: false,
  isRejected: true,
}

test('can specify an initial state as resolved', () => {
  const customInitialState = {status: 'resolved'}
  const {result} = renderHook(() => useAsync(customInitialState))
  expect(result.current).toEqual({
    ...resolvedState,
    ...customInitialState,
  })
})

test('can specify an initial state as pending', () => {
  const customInitialState = {status: 'pending'}
  const {result} = renderHook(() => useAsync(customInitialState))
  expect(result.current).toEqual({
    ...pendingState,
    ...customInitialState,
  })
})

test('can specify an initial state as rejected', () => {
  const customInitialState = {status: 'rejected'}
  const {result} = renderHook(() => useAsync(customInitialState))
  expect(result.current).toEqual({
    ...rejectedState,
    ...customInitialState,
  })
})

test('No state updates happen if the component is unmounted while pending', async () => {
  const {result, unmount} = renderHook(() => useAsync())
  act(() => {
    result.current.dispatch({type: 'pending'})
  })
  unmount()
  act(() => {
    result.current.dispatch({type: 'resolved'})
  })
})

test('can dispatch', () => {
  const {result} = renderHook(() => useAsync())
  act(() => {
    result.current.dispatch({type: 'resolved'})
  })
  expect(result.current).toEqual({
    ...resolvedState,
  })
})
