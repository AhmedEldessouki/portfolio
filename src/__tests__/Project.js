import * as React from 'react'
import userEvent from '@testing-library/user-event'
import {screen, waitForElementToBeRemoved} from '@testing-library/react'

import {render} from '../utils/utils'
import Projects from '../components/Projects/Projects'

test('Project Render', () => {
  render(<Projects />)
  waitForElementToBeRemoved(() => screen.getAllByText(/loading/i))

  expect(screen.getByText(/my projects/i)).toBeInTheDocument()
  expect(screen.getAllByText(/Portfolio v2/i)).toBeTruthy()
})

test('Project Details Render', () => {
  render(<Projects />)
  waitForElementToBeRemoved(() => screen.getAllByText(/loading/i))

  userEvent.click(screen.getByText(/Portfolio v2/i))

  expect(screen.getByText(/Portfolio v2/i)).toBeTruthy()
})
