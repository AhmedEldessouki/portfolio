import * as React from 'react'
import {screen} from '@testing-library/react'

import ContactMe from '../components/Home/ContactMe/ContactMe'
import {render, userEvent} from '../test/app-test-utils'
import {buildMessage} from '../test/generate'

const message = buildMessage()
test('Contact Form Test', () => {
  render(<ContactMe />, {user: null})
  userEvent.type(screen.getByPlaceholderText(/name/i), message.name)

  userEvent.type(screen.getByPlaceholderText(/email address/i), message.email)
  userEvent.type(
    screen.getByPlaceholderText(/phone number/i),
    message.phoneNumber,
  )
  userEvent.type(
    screen.getByPlaceholderText(/description/i),
    message.description,
  )
  expect(screen.getByPlaceholderText(/name/i)).toHaveDisplayValue(message.name)
  expect(screen.getByPlaceholderText(/email address/i)).toHaveDisplayValue(
    message.email,
  )
  expect(screen.getByPlaceholderText(/phone number/i)).toHaveDisplayValue(
    message.phoneNumber,
  )
  expect(screen.getByPlaceholderText(/description/i)).toHaveDisplayValue(
    message.description,
  )
  userEvent.click(screen.getByTestId('submit'))
})
