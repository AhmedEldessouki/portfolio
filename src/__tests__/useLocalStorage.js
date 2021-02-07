import { renderHook, act } from '@testing-library/react-hooks'
import { useLocalStorageState } from '../Utils/hooks'

const key = '__KEY__'

afterEach(() => {
  window.localStorage.removeItem(key)
})

const defaultState = [undefined, expect.any(Function)]
const initialState = [{ state: 'resolved' }, expect.any(Function)]

test('can specify an initial state', () => {
  const customInitialState = { state: 'resolved' }
  const { result } = renderHook(() =>
    useLocalStorageState(key, customInitialState),
  )
  expect(result.current).toEqual(initialState)
})

test('should set localStorage by using setState', () => {
  const customInitialState = { state: 'resolved' }
  const { result } = renderHook(() => useLocalStorageState(key))
  expect(result.current).toEqual(defaultState)

  const setState = result.current[1]
  act(() => {
    setState(customInitialState)
  })

  expect(result.current).toEqual(initialState)
})
