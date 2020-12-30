import * as React from 'react'
import {screen} from '@testing-library/react'

import {render, userEvent} from '../test/app-test-utils'
import {projects} from '../test/data/projects'
import Projects from '../components/Projects/Projects'
import {colors} from '../components/Styles'
import {projectsData} from '../test/data/projects-data'

test('Project Render', () => {
  render(<Projects projectsData={projects} />)
  expect(screen.getByText(/projects/i)).toBeInTheDocument()
  expect(screen.getByText(/Portfolio/i)).toBeInTheDocument()

  expect(screen.queryByTestId(/delete-button/i)).not.toBeInTheDocument()
  expect(screen.queryByTestId(/edit-project/i)).not.toBeInTheDocument()

  userEvent.hover(screen.getByText(/Portfolio v1/i))
  expect(screen.getByText(/Portfolio v1/i)).toHaveStyle(
    `background: ${colors.kindaBlue}, color: ${colors.darkBlue};`,
  )
})

test('Project Details Render', () => {
  render(<Projects projectsData={projectsData} />)

  userEvent.click(screen.getByText(projectsData[0].name))

  expect(screen.getAllByText(projectsData[0].name)).toHaveLength(2)
  expect(screen.getByRole('img')).toHaveAttribute('alt', projectsData[0].name)
  expect(screen.getByText(/added on/i)).toBeInTheDocument()
  expect(screen.getByText(projectsData[0].description)).toBeInTheDocument()
})

test('Project mount and unmount', () => {
  render(<Projects projectsData={projectsData} />)

  const tags = screen.queryAllByRole('img')

  userEvent.click(screen.getByText(projectsData[0].name))

  expect(screen.getAllByText(projectsData[0].name)).toHaveLength(2)

  userEvent.click(screen.getByTestId('close-toggler'))

  expect(tags[0]).not.toBeInTheDocument()
  expect(tags[1]).not.toBeInTheDocument()

  expect(screen.getByText(projectsData[0].name)).toBeInTheDocument()

  expect(tags[0]).toHaveAttribute('alt', 'tag')
  expect(tags[1]).toHaveAttribute('alt', 'tag')

  expect(screen.queryByText(/added on/i)).not.toBeInTheDocument()
  expect(
    screen.queryByText(projectsData[0].description),
  ).not.toBeInTheDocument()
})
