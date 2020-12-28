import * as React from 'react'
import {screen} from '@testing-library/react'

import ContactMe from '../components/Home/ContactMe/ContactMe'
import {render, userEvent} from '../test/app-test-utils'

test('Contact Form Test', () => {
  render(<ContactMe />)
  userEvent.type(screen.getByPlaceholderText(/name/i), 'Jest Testing')

  userEvent.type(
    screen.getByPlaceholderText(/email address/i),
    'Jest@Testing.js',
  )
  userEvent.type(screen.getByPlaceholderText(/phone number/i), '64456412355')
  userEvent.type(
    screen.getByPlaceholderText(/description/i),
    'If you see this it means that the text was a success',
  )
  userEvent.click(screen.getByTestId('submit'))
})
