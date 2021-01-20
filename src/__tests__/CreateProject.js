import React from 'react'
import App from '../App'
import {buildProject} from '../test/generate'
import {
  userEvent,
  loginAsUser,
  screen,
  renderWithAllProviders,
} from '../test/app-test-utils'
import * as projectsDB from '../test/data/projects'

async function renderAppScreen({user, doWait, project} = {}) {
  if (user === undefined) {
    user = await loginAsUser()
  }
  if (project === undefined) {
    project = await projectsDB.create(buildProject())
  }

  const route = `/`

  const utils = await renderWithAllProviders(<App />, {user, route, doWait})

  return {
    ...utils,
    project,
    user,
  }
}

test('Should fill out Create Project Form', async () => {
  const {project} = await renderAppScreen({
    doWait: false,
    message: null,
    tag: null,
  })

  userEvent.click(screen.getByText(/create project/i))

  expect(screen.queryByText(/accepted images/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/rejected images/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/current images/i)).not.toBeInTheDocument()

  expect(screen.getByText(/drop zone/i)).toBeInTheDocument()

  userEvent.type(screen.getByLabelText(/name/i), project.name)
  userEvent.type(screen.getByLabelText('link'), project.link)
  userEvent.type(screen.getByLabelText(/repoLink/i), project.repoLink)
  userEvent.click(screen.getByTestId(/tag-0/i))
  userEvent.type(screen.getByLabelText(/description/i), project.description)

  expect(screen.getByLabelText(/name/i)).toHaveDisplayValue(project.name)
  expect(screen.getByLabelText('link')).toHaveDisplayValue(project.link)
  expect(screen.getByLabelText(/repoLink/i)).toHaveDisplayValue(
    project.repoLink,
  )
  expect(screen.getByTestId('tag-0')).toBeChecked()
  expect(screen.getByLabelText(/description/i)).toHaveDisplayValue(
    project.description,
  )

  userEvent.click(screen.getByTestId('tag-0'))
  expect(screen.getByTestId('tag-0')).not.toBeChecked()

  expect(screen.getByRole('button', {name: /create project/i})).toHaveAttribute(
    'type',
    'submit',
  )

  // for testing the result after submitting
  // userEvent.click(screen.getByRole('button', {name: /create project/i}))
  // userEvent.click(screen.getByText(/dashboard/i))
  // screen.debug()
  // expect(screen.getByLabelText(/name/i)).not.toHaveDisplayValue(project.name)
  // expect(screen.queryByText(/drop zone/i)).not.toBeInTheDocument()

  // await waitForElementToBeRemoved(screen.getAllByText('XXXXXXX'))
  // expect(screen.getByText(project.name)).toBeInTheDocument()
})

// test('Create Project Images Drop Zone should upload 1 file', async () => {
//   const files = [
//     new File(['hello'], 'hello.png', {type: 'image/png'}),
//     new File(['there'], 'there.png', {type: 'image/png'}),
//   ]
//   await renderAppScreen({
//     doWait: false,
//     message: null,
//     project: null,
//     tag: null,
//   })

//   userEvent.click(screen.getByText(/create project/i))

//   expect(screen.getByText(/drop zone/i)).toBeInTheDocument()

//   const input = screen.getByLabelText(/ImageDropZone/i)
//   userEvent.upload(input, files)
//   //   fireEvent.drag(input, files)
//   //   fireEvent.drop(input, files)

//   const imgs = await screen.findAllByRole('img')

//   expect(screen.getByText(/accepted images/i)).toBeInTheDocument()

//   expect(imgs).toHaveLength(2)

//   // expect(input.files[0]).toStrictEqual(file)
//   // expect(input.files.item(0)).toStrictEqual(file)
//   // expect(input.files).toHaveLength(1)
// })
