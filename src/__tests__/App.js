import * as React from 'react'
import App from '../App'
import {
  userEvent,
  loginAsUser,
  screen,
  renderWithAllProviders,
} from '../test/app-test-utils'

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

test('should check all router', async () => {
  await renderAppScreen()
  userEvent.click(screen.getByText(/dashboard/i))
  userEvent.click(screen.getByTestId(/edit-project/i))
  userEvent.click(screen.getAllByText(/Ahmed ElDessouki/i)[0])
  userEvent.click(screen.getByText(/create project/i))
  userEvent.click(screen.getByText(/tags/i))
  userEvent.click(screen.getByText(/signup/i))
  userEvent.click(screen.getByText(/signOut/i))
})
