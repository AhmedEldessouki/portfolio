import * as React from 'react'
import App from '../App'
import {
  userEvent,
  loginAsUser,
  screen,
  renderWithAllProviders,
} from '../test/app-test-utils'
import {MockFirebase} from 'firebase-mock'

async function renderAppScreen({user, doWait} = {}) {
  if (user === undefined) {
    user = await loginAsUser()
  }

  const route = `/`
  const utils = await renderWithAllProviders(<App />, {user, route, doWait})

  return {
    ...utils,
    user,
  }
}

beforeEach(() => {
  jest.spyOn(console, 'error')
})

afterEach(() => {
  console.error.mockRestore()
})

test('should check all router', async () => {
  // const mockedReplace = jest.fn()
  // const originalWindow = {...window}
  // const windowSpy = jest.spyOn(global, 'window', 'get')
  await renderAppScreen()
  // windowSpy.mockImplementation(() => ({
  //   ...originalWindow,
  //   scroll: mockedReplace,
  // }))

  userEvent.click(screen.getByText(/dashboard/i))
  userEvent.click(screen.getByTestId(/edit-project/i))
  // expect(mockedReplace).toBeCalled()
  userEvent.click(screen.getAllByText(/Ahmed ElDessouki/i)[0])
  userEvent.click(screen.getByText(/create project/i))
  // expect(mockedReplace).toBeCalled()
  userEvent.click(screen.getByText(/tags/i))
  userEvent.click(screen.getByText(/signup/i))
  userEvent.click(screen.getByText(/signOut/i))
  // windowSpy.mockRestore()
})
