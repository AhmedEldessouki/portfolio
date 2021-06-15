import {renderHook, act} from '@testing-library/react-hooks'
import {useLocalStorageState} from '../Utils/hooks'

const key = '__KEY__'

describe('useLocalStorage', () => {
  afterEach(() => {
    window.localStorage.removeItem(key)
  })

  const defaultState = {state: undefined, setState: expect.any(Function)}
  const initialState = {
    state: {state: 'resolved'},
    setState: expect.any(Function),
  }

  test('can specify an initial state', () => {
    const customInitialState = {state: 'resolved'}
    const {result} = renderHook(() =>
      useLocalStorageState(key, customInitialState),
    )
    expect(result.current).toEqual(initialState)
  })

  test('should set localStorage by using setState', () => {
    const customInitialState = {state: 'resolved'}
    const {result} = renderHook(() => useLocalStorageState(key))
    expect(result.current).toEqual(defaultState)

    const {setState} = result.current
    act(() => {
      setState(customInitialState)
    })

    expect(result.current).toEqual(initialState)
  })
})
