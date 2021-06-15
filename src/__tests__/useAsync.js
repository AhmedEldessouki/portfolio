import {renderHook, act} from '@testing-library/react-hooks'
import {useAsync} from '../Utils/hooks'

const defaultState = {
  status: 'idle',
  error: undefined,
  data: undefined,
  isIdle: true,
  isLoading: false,
  isRejected: false,
  isSuccess: false,
  setData: expect.any(Function),
  setError: expect.any(Function),
  run: expect.any(Function),
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
  error: {code: 'Bam_Bam', message: 'it blew up!'},
}

test('can specify an initial state as resolved', () => {
  const customInitialStatus = 'resolved'
  const {result} = renderHook(() =>
    useAsync({initialStatus: customInitialStatus}),
  )
  expect(result.current).toEqual({
    ...resolvedState,
    ...{status: customInitialStatus},
  })
})

test('can specify an initial state as pending', () => {
  const customInitialStatus = 'pending'
  const {result} = renderHook(() =>
    useAsync({initialStatus: customInitialStatus}),
  )
  expect(result.current).toEqual({
    ...pendingState,
    ...{status: customInitialStatus},
  })
})

test('can specify an initial state as rejected & dispatch Error', () => {
  const customInitialStatus = 'rejected'
  const {result} = renderHook(() =>
    useAsync({initialStatus: customInitialStatus}),
  )
  act(() => {
    result.current.dispatch({
      type: 'rejected',
      payload: {error: rejectedState.error},
    })
  })
  expect(result.current).toEqual({
    ...rejectedState,
    ...{status: customInitialStatus},
  })
})

test('No state updates happen if the component is unmounted while pending', () => {
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
