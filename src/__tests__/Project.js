import * as React from 'react'
import {screen} from '@testing-library/react'

import {render, userEvent} from '../test/app-test-utils'
import {projects} from '../test/data/projects'
import Projects from '../components/Projects/Projects'
import {colors} from '../components/Styles'

test('Project Render', () => {
  render(<Projects projectsData={projects} />)
  expect(screen.getByText(/projects/i)).toBeInTheDocument()
  expect(screen.getByText(/Portfolio/i)).toBeInTheDocument()

  expect(screen.getByTestId(/sort_by_name/i)).toBeInTheDocument()
  expect(screen.getByTestId('sort_by_date')).toBeInTheDocument()
  expect(screen.getByTestId(/sort_by_date_reverse/i)).toBeInTheDocument()

  expect(screen.queryByTestId(/delete-button/i)).not.toBeInTheDocument()
  expect(screen.queryByTestId(/edit-project/i)).not.toBeInTheDocument()

  userEvent.hover(screen.getByText(/Portfolio v1/i))
  expect(screen.getByText(/Portfolio v1/i)).toHaveStyle(
    `background: ${colors.kindaBlue}, color: ${colors.darkBlue};`,
  )
})

test('Project Details Render', () => {
  render(<Projects projectsData={projects} />)

  userEvent.click(screen.getByText(projects[0].name))

  expect(screen.getAllByText(projects[0].name)).toHaveLength(2)
  expect(screen.getByRole('img')).toHaveAttribute('alt', projects[0].name)
  expect(screen.getByText(/added on/i)).toBeInTheDocument()
  expect(screen.getByText(projects[0].description)).toBeInTheDocument()
})

test('Projects OnToggle mount and unmount', () => {
  render(<Projects projectsData={projects} />)

  const tags = screen.queryAllByRole('img')

  userEvent.click(screen.getByText(projects[0].name))

  expect(screen.getAllByText(projects[0].name)).toHaveLength(2)

  userEvent.click(screen.getByTestId('close-toggler'))

  expect(tags[0]).not.toBeInTheDocument()
  expect(tags[1]).not.toBeInTheDocument()

  expect(screen.getByText(projects[0].name)).toBeInTheDocument()

  expect(tags[0]).toHaveAttribute('alt', 'tag')
  expect(tags[1]).toHaveAttribute('alt', 'tag')

  expect(screen.queryByText(/added on/i)).not.toBeInTheDocument()
  expect(screen.queryByText(projects[0].description)).not.toBeInTheDocument()
})

test('Projects Sorting buttons check', () => {
  render(<Projects projectsData={projects} />)

  userEvent.click(screen.getByTestId(/sort_by_name/i))
  expect(screen.getByTestId(/sort_by_name/i)).toBeDisabled()

  userEvent.click(screen.getByTestId('sort_by_date'))
  expect(screen.getByTestId('sort_by_date')).toBeDisabled()

  userEvent.click(screen.getByTestId(/sort_by_date_reverse/i))
  expect(screen.getByTestId(/sort_by_date_reverse/i)).toBeDisabled()
})

test('Projects Sorting Integration', () => {
  render(<Projects projectsData={projects} />)

  userEvent.click(screen.getByTestId(/sort_by_name/i))
  expect(screen.getByTestId(/sort_by_name/i)).toBeDisabled()

  const sortedByName = projects.sort((a, b) => a.name.localeCompare(b.name))
  expect(projects).toEqual(sortedByName)
  sortedByName.map((project, i) =>
    expect(screen.getByTestId(`project[${i}]`)).toHaveTextContent(project.name),
  )

  userEvent.click(screen.getByTestId('sort_by_date'))
  expect(screen.getByTestId('sort_by_date')).toBeDisabled()

  const sortedByDate = projects.sort(function (a, b) {
    let x = new Date(a.date),
      y = new Date(b.date)
    return x - y
  })
  sortedByDate.map((project, i) =>
    expect(screen.getByTestId(`project[${i}]`)).toHaveTextContent(project.name),
  )

  userEvent.click(screen.getByTestId(/sort_by_date_reverse/i))
  expect(screen.getByTestId(/sort_by_date_reverse/i)).toBeDisabled()

  const sortedByDateReversed = sortedByDate.reverse()
  sortedByDateReversed.map((project, i) =>
    expect(screen.getByTestId(`project[${i}]`)).toHaveTextContent(project.name),
  )
})
