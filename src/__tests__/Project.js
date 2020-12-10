import * as React from 'react'
import userEvent from '@testing-library/user-event'
import {screen, waitForElementToBeRemoved} from '@testing-library/react'

import {render} from '../utils/utils'
import Projects from '../components/Projects/Projects'

// These Values are from the PlaceHolder of React-Query
test('Project Render', () => {
  render(<Projects />)
  waitForElementToBeRemoved(() => screen.getAllByText(/loading/i))

  expect(screen.getByText(/projects/i)).toBeInTheDocument()
  expect(screen.getAllByText(/XXXXXXX/i)).toBeTruthy()
})

test('Project Details Render', () => {
  render(<Projects />)
  waitForElementToBeRemoved(() => screen.getAllByText(/loading/i))

  userEvent.click(screen.getByText(/XXXXXXX/i))

  expect(screen.getAllByText(/XXXXXXX/i)).toBeTruthy()
})
