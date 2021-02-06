import React from 'react'
import App from '../App'
import {
  userEvent,
  loginAsUser,
  screen,
  renderWithAllProviders,
} from '../test/app-test-utils'
import * as hooks from '../components/Utils/apis'

async function renderAppScreen({ user, doWait } = {}) {
  if (user === undefined) {
    user = await loginAsUser()
  }

  const route = `/`
  const utils = await renderWithAllProviders(<App />, { user, route, doWait })

  return {
    ...utils,
    user,
  }
}

beforeAll(() => {
  jest.mock('react-query', () => ({
    useQuery: jest.fn(),
  }))
  jest.mock('../components/Utils/apis', () => {
    return { useClientFetch: jest.fn() }
  })
  jest.spyOn(console, 'error')
})

afterEach(() => {
  jest.mock().clearAllMocks()
})

test('should check all router', async () => {
  const useClientFetch = jest.spyOn(hooks, 'useClientFetch')
  await renderAppScreen()
  userEvent.click(screen.getByText(/dashboard/i))
  expect(useClientFetch).toBeCalledWith('projects')
  expect(useClientFetch).toBeCalledWith('contactedMe')
  userEvent.click(screen.getByTestId(/edit-project/i))
  userEvent.click(screen.getAllByText(/Ahmed ElDessouki/i)[0])
  userEvent.click(screen.getByText(/create project/i))
  userEvent.click(screen.getByText(/tags/i))
  expect(useClientFetch).toBeCalledWith('tags')
  userEvent.click(screen.getByText(/signup/i))
  userEvent.click(screen.getByText(/signOut/i))
  // 2 (Landing page & Dashboard) * 3 times visited + 1 * 3 Create-Project Edit-Project Tags = 9
  expect(useClientFetch).toBeCalledTimes(9)
})
