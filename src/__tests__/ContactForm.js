import * as React from 'react'
import {screen} from '@testing-library/react'

import ContactForm from '../components/Home/ContactMe/ContactForm'
import {render, userEvent} from '../test/app-test-utils'
import {buildMessage} from '../test/generate'
import {colors} from '../components/Styles'

const message = buildMessage()

test('Should fill out Contact Form', async () => {
  await render(<ContactForm />, {user: null, doWait: false})

  userEvent.type(screen.getByLabelText(/name/i), message.name)

  userEvent.type(screen.getByLabelText(/email/i), message.email)
  userEvent.type(screen.getByLabelText(/phoneNumber/i), message.phoneNumber)
  userEvent.type(screen.getByLabelText(/description/i), message.description)
  expect(screen.getByLabelText(/name/i)).toHaveDisplayValue(message.name)
  expect(screen.getByLabelText(/email/i)).toHaveDisplayValue(message.email)
  expect(screen.getByLabelText(/phoneNumber/i)).toHaveDisplayValue(
    message.phoneNumber,
  )
  expect(screen.getByLabelText(/description/i)).toHaveDisplayValue(
    message.description,
  )

  expect(screen.getByRole('button', {name: /submit/i})).toHaveAttribute(
    'type',
    'submit',
  )
})

test('PhoneNumber Field Should [fail]', async () => {
  await render(<ContactForm />, {user: null, doWait: false})

  userEvent.type(screen.getByLabelText(/phoneNumber/i), message.phoneNumber)

  expect(screen.getByLabelText(/phoneNumber/i)).toHaveDisplayValue(
    message.phoneNumber,
  )

  userEvent.type(screen.getByLabelText(/phoneNumber/i), 'sad')
  userEvent.tab()

  expect(screen.getByRole('alert').innerHTML).toMatchInlineSnapshot(
    `"Invalid Phone Number"`,
  )

  expect(screen.getByLabelText(/phoneNumber/i)).toHaveDisplayValue(
    message.phoneNumber + 'sad',
  )

  expect(screen.getByLabelText(/phoneNumber/i))
    .toHaveStyle(`border-color: ${colors.burgundyRed}
      `)
})

test('PhoneNumber Field should [succeed] ', async () => {
  await render(<ContactForm />, {user: null, doWait: false})

  userEvent.type(screen.getByLabelText(/phoneNumber/i), message.phoneNumber)

  expect(screen.getByLabelText(/phoneNumber/i)).toHaveDisplayValue(
    message.phoneNumber,
  )

  userEvent.tab()

  expect(screen.queryByRole('alert')).not.toBeInTheDocument()

  expect(screen.getByLabelText(/phoneNumber/i))
    .toHaveStyle(`border-color: ${colors.lightGreen}
  `)
})

test('PhoneNumber Field Should [Fail] and then [Succeed]', async () => {
  await render(<ContactForm />, {user: null, doWait: false})

  userEvent.type(screen.getByLabelText(/phoneNumber/i), message.phoneNumber)

  expect(screen.getByLabelText(/phoneNumber/i)).toHaveDisplayValue(
    message.phoneNumber,
  )

  userEvent.type(screen.getByLabelText(/phoneNumber/i), 'sad')
  userEvent.tab()

  expect(screen.getByRole('alert').innerHTML).toMatchInlineSnapshot(
    `"Invalid Phone Number"`,
  )

  expect(screen.getByLabelText(/phoneNumber/i)).toHaveDisplayValue(
    message.phoneNumber + 'sad',
  )

  expect(screen.getByLabelText(/phoneNumber/i))
    .toHaveStyle(`border-color: ${colors.burgundyRed}
    `)

  userEvent.clear(screen.getByLabelText(/phoneNumber/i))
  userEvent.type(screen.getByLabelText(/phoneNumber/i), message.phoneNumber)
  userEvent.tab()

  expect(screen.getByLabelText(/phoneNumber/i))
    .toHaveStyle(`border-color: ${colors.lightGreen}
  `)
})
