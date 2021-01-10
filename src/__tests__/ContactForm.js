import * as React from 'react'
import {screen} from '@testing-library/react'

import ContactForm from '../components/Home/ContactMe/ContactForm'
import {render, userEvent} from '../test/app-test-utils'
import {buildMessage} from '../test/generate'

const message = buildMessage()
test('Should fill out Contact Form Test', async () => {
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

  userEvent.click(screen.getByTestId('submit'))
})
