import * as React from 'react'
import App from '../App'
import {buildMessage, buildProject, buildTag, buildUser} from '../test/generate'
import {
  userEvent,
  loginAsUser,
  screen,
  renderWithAllProviders,
} from '../test/app-test-utils'
import * as projectsDB from '../test/data/projects'
import * as messagesDB from '../test/data/messages'
import * as tagsDB from '../test/data/tags'
import * as usersDB from '../test/data/user'

async function renderAppScreen({user, doWait, project, message, tag} = {}) {
  if (user === undefined) {
    user = await loginAsUser()
  }
  if (project === undefined) {
    project = await projectsDB.create(buildProject())
  }
  if (tag === undefined) {
    tag = await tagsDB.create(buildTag())
  }
  if (message === undefined) {
    message = await messagesDB.create(buildMessage())
  }
  const route = `/`

  const utils = await renderWithAllProviders(<App />, {user, route, doWait})

  return {
    ...utils,
    project,
    message,
    tag,
    user,
  }
}

describe('App: Should Check Forms', () => {
  beforeAll(() => {
    jest.mock('react-query', () => ({
      useQuery: () => ({isLoading: false, error: {}, data: []}),
    }))
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterAll(() => {
    console.error.mockRestore()
  })

  test('Contact Me Form', async () => {
    const {message} = await renderAppScreen({project: null, tag: null})

    userEvent.type(screen.getByLabelText(/name/i), message.name)

    userEvent.type(screen.getByLabelText(/email/i), message.email)
    userEvent.type(screen.getByLabelText(/phoneNumber/i), message.phoneNumber)
    userEvent.type(screen.getByLabelText(/description/i), message.description)

    expect(screen.getByLabelText(/name/i)).toHaveDisplayValue(message.name)
    expect(screen.getByLabelText(/email/i)).toHaveDisplayValue(message.email)
    expect(screen.getByLabelText(/phoneNumber/i)).toHaveDisplayValue(
      message.phoneNumber,
    )
    expect(screen.getByLabelText(/description/i)).toHaveDisplayValue(
      message.description,
    )
  })

  test('Create Project Form', async () => {
    const {project} = await renderAppScreen({
      doWait: false,
      message: null,
      tag: null,
    })

    userEvent.click(screen.getByText(/create project/i))

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

    userEvent.click(screen.getByText(/tags/i))
  })

  test('Tags Form', async () => {
    const {tag} = await renderAppScreen({
      doWait: false,
      message: null,
      project: null,
    })

    userEvent.click(screen.getByText(/tags/i))

    userEvent.type(screen.getByLabelText('name'), tag.name)
    userEvent.type(screen.getByLabelText(/url/i), tag.url)

    expect(screen.getByLabelText(/name/i)).toHaveDisplayValue(tag.name)
    expect(screen.getByLabelText('url')).toHaveDisplayValue(tag.url)
  })

  test('Sign-Up Form', async () => {
    const {user} = await renderAppScreen({
      doWait: false,
      message: null,
      tag: null,
      project: null,
    })

    userEvent.click(screen.getByText(/signup/i))

    userEvent.type(screen.getByLabelText('firstName'), user.firstName)
    userEvent.type(screen.getByLabelText('lastName'), user.lastName)
    userEvent.type(screen.getByLabelText(/email/i), user.email)
    userEvent.type(screen.getByLabelText('password'), user.password)
    userEvent.type(screen.getByLabelText(/confirmPassword/i), user.password)

    expect(screen.getByLabelText(/firstName/i)).toHaveDisplayValue(
      user.firstName,
    )
    expect(screen.getByLabelText(/lastName/i)).toHaveDisplayValue(user.lastName)
    expect(screen.getByLabelText('password')).toHaveDisplayValue(user.password)
    expect(screen.getByLabelText('confirmPassword')).toHaveDisplayValue(
      user.password,
    )
    expect(screen.getByLabelText('email')).toHaveDisplayValue(user.email)
  })

  test('Sign-In Form', async () => {
    const user = buildUser()
    window.localStorage.setItem(usersDB.usersKey, null)
    await renderAppScreen({
      doWait: false,
      message: null,
      user: null,
      tag: null,
      project: null,
    })

    expect(
      await screen.findByText(/© 2019 Ahmed ElDessouki/i),
    ).toBeInTheDocument()
    userEvent.click(screen.getByText('© 2019 Ahmed ElDessouki'))

    userEvent.type(screen.getByLabelText(/email/i), user.email)
    userEvent.type(screen.getByLabelText('password'), user.password)

    expect(screen.getByLabelText('email')).toHaveDisplayValue(user.email)
    expect(screen.getByLabelText('password')).toHaveDisplayValue(user.password)
  })
})
