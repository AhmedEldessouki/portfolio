import * as React from 'react'
import userEvent from '@testing-library/user-event'
import {screen} from '@testing-library/react'

import {render} from '../test/app-test-utils'
import {projects} from '../test/data/projects'
import Projects from '../components/Projects/Projects'
import {colors} from '../components/Styles'
import {buildProject} from '../test/generate'

test('Project Render', async () => {
  render(<Projects projectsData={projects} />)
  expect(screen.getByText(/projects/i)).toBeInTheDocument()
  expect(screen.getByText(/Portfolio/i)).toBeInTheDocument()

  userEvent.hover(screen.getByText(/Portfolio v1/i))
  expect(screen.getByText(/Portfolio v1/i)).toHaveStyle(
    `background: ${colors.kindaBlue}, color: ${colors.darkBlue};`,
  )
})

const project = buildProject()
test('Project Details Render', () => {
  render(<Projects projectsData={[project]} />)

  userEvent.click(screen.getByText(project.name))

  expect(screen.getAllByText(project.name)).toHaveLength(2)
  expect(screen.getByRole('img')).toHaveAttribute('alt', project.name)
  expect(screen.getByText(/added on/i)).toBeInTheDocument()
  expect(screen.getByText(project.description)).toBeInTheDocument()
  screen.debug()
})

test('Project mount and unmount', () => {
  render(<Projects projectsData={[project]} />)

  const tags = screen.queryAllByRole('img')

  userEvent.click(screen.getByText(project.name))

  expect(screen.getAllByText(project.name)).toHaveLength(2)

  userEvent.click(screen.getByTestId('close-toggler'))

  expect(tags[0]).not.toBeInTheDocument()
  expect(tags[1]).not.toBeInTheDocument()

  expect(screen.getByText(project.name)).toBeInTheDocument()

  expect(tags[0]).toHaveAttribute('alt', 'tag')
  expect(tags[1]).toHaveAttribute('alt', 'tag')

  expect(screen.queryByText(/added on/i)).not.toBeInTheDocument()
  expect(screen.queryByText(project.description)).not.toBeInTheDocument()
})
