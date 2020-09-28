import React from 'react'
import userEvent from '@testing-library/user-event'

import {render, screen} from '@testing-library/react'
import App from '../App'

it('App Rendered', () => {
  render(<App />)
  expect(screen.getAllByAltText(/ahmed eldessouki/i)).toBeTruthy()
  userEvent.type(screen.getByPlaceholderText(/name/i), 'Jest Testing')
  userEvent.type(
    screen.getByPlaceholderText(/email address/i),
    'Jest@Testing.js',
  )
  userEvent.type(screen.getByPlaceholderText(/phone number/i), '64456412355')
  userEvent.type(
    screen.getByPlaceholderText(/name/i),
    'If you see this it means that the text was a success',
  )
  userEvent.click(screen.getByRole('button')).toBeEnabled()
})
