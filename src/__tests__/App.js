import React from 'react'
import userEvent from '@testing-library/user-event'
import {render, screen, waitFor} from '@testing-library/react'
import {
  toBeInTheDocument,
  toBeDisabled,
  toHaveDescription,
} from '@testing-library/jest-dom'

import App from '../App'

describe('Portfolio', () => {
  beforeEach(() => {})
  test('App Rendered', () => {
    render(<App />)

    expect(screen.getByAltText(/ahmed eldessouki/i)).toBeTruthy()
    expect(screen.getAllByText(/Ahmed eldessouki/i)).toBeTruthy()
    expect(screen.getAllByText(/github/i)).toBeTruthy()
  })
  test('Project Render', () => {
    render(<App />)

    expect(screen.getByText(/my projects/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Portfolio v2/i)).toBeTruthy()
  })

  test('Contact Form Test', () => {
    render(<App />)

    expect(screen.getAllByAltText(/ahmed eldessouki/i)).toBeTruthy()
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

  test('Project Details Render', () => {
    render(<App />)

    userEvent.click(screen.getByText(/Portfolio v2/i))

    expect(screen.getByText(/Portfolio v2/i)).toBeTruthy()
  })
})
