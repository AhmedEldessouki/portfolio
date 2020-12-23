import * as React from 'react'
import userEvent from '@testing-library/user-event'
import {screen} from '@testing-library/react'

import {render} from '../test/app-test-utils'
import {projects} from '../test/data/projects'
import Projects from '../components/Projects/Projects'
import {colors} from '../components/Styles'

test('Project Render', async () => {
  render(<Projects projectsData={projects} />)
  expect(screen.getByText(/projects/i)).toBeInTheDocument()
  expect(screen.getByText(/Portfolio/i)).toBeInTheDocument()

  userEvent.hover(screen.getByText(/Portfolio v1/i))
  expect(screen.getByText(/Portfolio v1/i)).toHaveStyle(
    `background: ${colors.kindaBlue}, color: ${colors.darkBlue};`,
  )
})

test('Project Details Render', () => {
  render(<Projects projectsData={projects} />)
  userEvent.click(screen.getByText(/Portfolio v1/i))

  screen.debug()
})
