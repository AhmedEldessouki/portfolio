import React from 'react'
import {
  render,
  userEvent,
  screen,
  waitForElementToBeRemoved,
} from '../test/app-test-utils'
import PopUp from '../components/PopUp/PopUp'

const func = jest.fn()

test('should display PopUp then reject then PopUp closes', async () => {
  await render(
    <PopUp info="Entered Titled" onClickYes={func} controls="none" />,
    {
      user: null,
      doWait: false,
    },
  )

  userEvent.click(screen.getByTestId('delete-button'))

  const buttons = screen.getAllByRole('button')

  expect(screen.getByText(/warning/i)).toBeInTheDocument()
  expect(screen.getByText(/Entered Titled/i)).toBeInTheDocument()

  expect(buttons).toHaveLength(3)
  expect(buttons[0]).not.toHaveTextContent()
  expect(buttons[1]).toHaveTextContent(/nah/i)
  expect(buttons[2]).toHaveTextContent(/yup/i)

  userEvent.click(buttons[1])

  expect(screen.queryByText(/warning/i)).not.toBeInTheDocument()
})

test('should display PopUp then accept then PopUp closes', async () => {
  await render(
    <PopUp info="Entered Titled" onClickYes={func} controls="none" />,
    {
      doWait: false,
    },
  )

  userEvent.click(screen.getByTestId('delete-button'))

  const buttons = screen.getAllByRole('button')

  expect(screen.getByText(/warning/i)).toBeInTheDocument()
  expect(screen.getByText(/Entered Titled/i)).toBeInTheDocument()

  userEvent.click(buttons[2])
  await waitForElementToBeRemoved(() => screen.getByText(/warning/i))

  expect(func).toBeCalledTimes(1)

  expect(screen.queryByText(/warning/i)).not.toBeInTheDocument()
})
