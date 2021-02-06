import * as React from 'react'
import { render, screen } from '@testing-library/react'

import Messages from '../components/Dashboard/Messaging/Messages'
import { userEvent } from '../test/app-test-utils'
import { colors } from '../components/Styles'
import { buildMessage } from '../test/generate'

const messages = []
beforeAll(() => {
  messages.push(buildMessage())
  jest.mock('react-query', () => ({
    useQuery: () => ({ isLoading: false, error: {}, data: [] }),
  }))
})

test('message Render', async () => {
  await render(<Messages messagesData={messages} />, { user: null })
  expect(screen.getByText(messages[0].name)).toBeInTheDocument()

  expect(screen.getByTestId(/delete-button/i)).toBeInTheDocument()

  userEvent.hover(screen.getByText(messages[0].name))
  expect(screen.getByText(messages[0].name)).toHaveStyle(
    `background: ${colors.kindaBlue}, color: ${colors.darkBlue};`,
  )
})

test('message Details Render', async () => {
  await render(<Messages messagesData={messages} />)
  userEvent.click(screen.getByText(messages[0].name))

  expect(screen.queryByTestId(/delete-button/i)).not.toBeInTheDocument()

  expect(screen.getByText(messages[0].name)).toBeInTheDocument()
  expect(screen.getByText(messages[0].name.toUpperCase())).toBeInTheDocument()
  expect(screen.getByText(messages[0].email)).toBeInTheDocument()
  expect(screen.getByText(/Phone Number:/i)).toHaveTextContent(
    messages[0].phoneNumber,
  )
  expect(screen.getByText(messages[0].description)).toBeInTheDocument()
})
test('message mount and unmount', async () => {
  await render(<Messages messagesData={messages} />)
  userEvent.click(screen.getByText(messages[0].name))

  userEvent.click(screen.getByTestId('close-toggler'))

  expect(screen.getByText(messages[0].name)).toBeInTheDocument()

  expect(
    screen.queryByText(messages[0].name.toUpperCase()),
  ).not.toBeInTheDocument()
  expect(screen.queryByText(messages[0].email)).not.toBeInTheDocument()
  expect(screen.queryByText(/Phone Number:/i)).not.toBeInTheDocument()
  expect(screen.queryByText(messages[0].description)).not.toBeInTheDocument()
})
