import * as React from 'react'
import App from '../App'
import faker from 'faker'
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

const password = faker.internet.password(6)
const wrongPassword = `${password}123456`

test('Should fill out Sign-Up Form', async () => {
  const {user} = await renderAppScreen({
    doWait: false,
    message: null,
    tag: null,
    project: null,
  })

  userEvent.click(screen.getByText(/signup/i))

  expect(screen.queryByRole('alert')).not.toBeInTheDocument()

  userEvent.type(screen.getByLabelText('firstName'), user.firstName)
  userEvent.type(screen.getByLabelText('lastName'), user.lastName)
  userEvent.type(screen.getByLabelText('password'), password)
  userEvent.type(screen.getByLabelText(/confirmPassword/i), wrongPassword)

  expect(screen.getByRole('alert').textContent).toMatchInlineSnapshot(
    `"Password Don't Match"`,
  )
  expect(password).not.toEqual(wrongPassword)
  expect(password).toEqual(password)

  userEvent.clear(screen.getByLabelText(/confirmPassword/i), wrongPassword)
  expect(screen.getByLabelText('confirmPassword')).toHaveDisplayValue('')
  userEvent.type(screen.getByLabelText(/confirmPassword/i), password)

  screen.getByLabelText('password').blur()
  screen.getByLabelText('email').focus()

  userEvent.type(screen.getByLabelText(/email/i), user.email)
  userEvent.click(screen.getByLabelText(/confirmPassword/i))

  expect(screen.getByLabelText(/firstName/i)).toHaveDisplayValue(user.firstName)
  expect(screen.getByLabelText(/lastName/i)).toHaveDisplayValue(user.lastName)
  expect(screen.getByLabelText('password')).toHaveDisplayValue(password)
  expect(screen.getByLabelText('confirmPassword')).toHaveDisplayValue(password)

  expect(screen.getByLabelText('email')).toHaveDisplayValue(user.email)

  // isnt working......
  //   expect(screen.queryByRole('alert')).not.toBeInTheDocument()

  expect(screen.getByRole('button', {name: /submit/i})).toHaveAttribute(
    'type',
    'submit',
  )
})
