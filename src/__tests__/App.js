import * as React from 'react'
import App from '../App'
import {buildMessage, buildProject, buildUser} from '../test/generate'
import {
  render,
  userEvent,
  loginAsUser,
  screen,
  renderWithAllProviders,
  waitForElementToBeRemoved,
} from '../test/app-test-utils'
import {server, rest} from '../test/server/test-server'
import * as projectsDB from '../test/data/projects'

async function renderAppScreen({user, project} = {}) {
  if (user === undefined) {
    user = await loginAsUser()
  }
  if (project === undefined) {
    project = await projectsDB.create(buildProject())
  }
  const route = `/`

  const utils = await renderWithAllProviders(<App />, {user, route})

  return {
    ...utils,
    project,
    user,
  }
}

const message = buildMessage()

beforeAll(() => {
  jest.mock('react-query', () => ({
    useQuery: () => ({isLoading: false, error: {}, data: []}),
  }))
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  console.error.mockRestore()
})
test('App Rendered', async () => {
  const {project} = await renderAppScreen({project: null})

  userEvent.type(screen.getByPlaceholderText(/name/i), message.name)

  userEvent.type(screen.getByPlaceholderText(/email address/i), message.email)
  userEvent.type(
    screen.getByPlaceholderText(/phone number/i),
    message.phoneNumber,
  )
  userEvent.type(
    screen.getByPlaceholderText(/description/i),
    message.description,
  )
  expect(screen.getByPlaceholderText(/name/i)).toHaveDisplayValue(message.name)
  expect(screen.getByPlaceholderText(/email address/i)).toHaveDisplayValue(
    message.email,
  )
  expect(screen.getByPlaceholderText(/phone number/i)).toHaveDisplayValue(
    message.phoneNumber,
  )
  expect(screen.getByPlaceholderText(/description/i)).toHaveDisplayValue(
    message.description,
  )
  //   userEvent.click(screen.getByTestId('submit'))

  //   server.use(
  //     rest.post('/contactedMe', async (req, res, ctx) => {
  //       return res(ctx.status(200), ctx.json({data: message}))
  //     }),
  //     rest.post('/login', async (req, res, ctx) => {
  //       return res(ctx.status(200), ctx.json({data: buildUser()}))
  //     }),
  //   )

  //   userEvent.click(screen.getByText(/dashboard/i))

  //   expect(screen.getAllByText(/XXXXXXX/i)).toHaveLength(2)
  //   await waitForElementToBeRemoved(() => screen.getAllByText(/xxx/i))
  //   expect(screen.queryByText(/XXXXXXX/i)).not.toBeInTheDocument()
  //   expect(screen.getByText(message.name)).toBeInTheDocument()
})
