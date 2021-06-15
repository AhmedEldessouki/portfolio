import * as React from 'react'
import App from '../App'
import {buildUser} from '../test/generate'
import {userEvent, screen, renderWithAllProviders} from '../test/app-test-utils'
import * as usersDB from '../test/data/user'

async function renderAppScreen({user, doWait} = {}) {
  const route = `/`

  const utils = await renderWithAllProviders(<App />, {user, route, doWait})

  return {
    ...utils,
    user,
  }
}

test('Should fill out Sign-In Form', async () => {
  const user = buildUser()
  window.localStorage.setItem(usersDB.usersKey, null)
  await renderAppScreen({
    doWait: false,
    user: null,
  })

  expect(
    await screen.findByText(/© 2021 Ahmed ElDessouki/i),
  ).toBeInTheDocument()
  userEvent.click(screen.getByText('© 2021 Ahmed ElDessouki'))

  userEvent.type(screen.getByLabelText(/email/i), user.email)
  userEvent.type(screen.getByLabelText(/password/i), user.password)

  expect(screen.getByLabelText(/email/i)).toHaveDisplayValue(user.email)
  expect(screen.getByLabelText(/password/i)).toHaveDisplayValue(user.password)

  expect(screen.getByRole('button', {name: /submit/i})).toHaveAttribute(
    'type',
    'submit',
  )
  // userEvent.click(screen.getByRole('button', {name: /submit/i}))

  // expect(screen.getByText(/projects/i)).toBeInTheDocument()
})
// test('Should Sign-In Form fail and show the error Message', async () => {
//   const user = buildUser()
//   window.localStorage.setItem(usersDB.usersKey, null)
//   await renderAppScreen({
//     doWait: false,
//     user: null,
//   })

//   expect(
//     await screen.findByText(/© 2019 Ahmed ElDessouki/i),
//   ).toBeInTheDocument()
//   userEvent.click(screen.getByText('© 2019 Ahmed ElDessouki'))

//   userEvent.type(screen.getByLabelText(/email/i), user.email)
//   userEvent.type(screen.getByLabelText('password'), user.password)

//   userEvent.click(screen.getByRole('button', {name: /submit/i}))

//   expect(await screen.findByRole('alert').textContent).toMatchInlineSnapshot(
//     `undefined`,
//   )
//   // expect(screen.getByText(/projects/i)).toBeInTheDocument()
// })
