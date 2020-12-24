import * as React from 'react'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'

import Messages from '../components/Dashboard/Messaging/Messages'
// import {render} from '../test/app-test-utils'
import {colors} from '../components/Styles'
import {buildMessage} from '../test/generate'

let messages = []
beforeAll(() => {
  messages.push(buildMessage())
  window.localStorage.setItem('__portfolio_user__', 'ascasasfasfasd')
})

afterAll(() => {
  window.localStorage.setItem('__portfolio_user__', null)
})

test('message Render', async () => {
  render(<Messages messagesData={messages} />)
  expect(screen.getByText(messages[0].name)).toBeInTheDocument()

  userEvent.hover(screen.getByText(messages[0].name))
  expect(screen.getByText(messages[0].name)).toHaveStyle(
    `background: ${colors.kindaBlue}, color: ${colors.darkBlue};`,
  )
})

test('message Details Render', () => {
  render(<Messages messagesData={messages} />)
  userEvent.click(screen.getByText(messages[0].name))

  expect(screen.getByText(messages[0].name)).toBeInTheDocument()
  expect(screen.getByText(messages[0].name.toUpperCase())).toBeInTheDocument()
  expect(screen.getByText(messages[0].email)).toBeInTheDocument()
  expect(screen.getByText(/Phone Number:/i)).toHaveTextContent(
    messages[0].phoneNumber,
  )
  expect(screen.getByText(messages[0].description)).toBeInTheDocument()
})
test('message mount and unmount', () => {
  render(<Messages messagesData={messages} />)
  userEvent.click(screen.getByText(messages[0].name))

  userEvent.click(screen.getByTestId('close-toggler'))

  expect(screen.queryByText(messages[0].name)).toBeInTheDocument()

  expect(
    screen.queryByText(messages[0].name.toUpperCase()),
  ).not.toBeInTheDocument()
  expect(screen.queryByText(messages[0].email)).not.toBeInTheDocument()
  expect(screen.queryByText(/Phone Number:/i)).not.toBeInTheDocument()
  expect(screen.queryByText(messages[0].description)).not.toBeInTheDocument()
})
