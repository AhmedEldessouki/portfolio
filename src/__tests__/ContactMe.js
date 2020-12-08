import * as React from 'react'
import userEvent from '@testing-library/user-event'
import {screen, waitForElementToBeRemoved} from '@testing-library/react'

import {render} from '../utils/utils'
import ContactMe from '../components/Home/ContactMe/ContactMe'

test('Contact Form Test', () => {
  render(<ContactMe />)
  waitForElementToBeRemoved(() => screen.getAllByText(/loading/i))
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
