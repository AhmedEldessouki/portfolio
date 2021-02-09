import { render } from '@testing-library/react'
import React from 'react'
import { screen, userEvent } from '../test/app-test-utils'
import Input from '../components/Input'
import { colors } from '../Styles'

test('should Input onChange', () => {
  const handleChange = jest.fn(e => e.target.value)
  render(<Input data-testid="name" type="text" onChange={handleChange} />)

  expect(handleChange).toBeCalledTimes(0)

  userEvent.type(screen.getByTestId('name'), 'asdasd')
  expect(handleChange).toBeCalledTimes(6)
})

test('should Input onBlur Error: accept only text', () => {
  render(
    <>
      <Input
        data-testid="name"
        id="name"
        type="text"
        name="name"
        pattern="[^\(\)0-9]*"
        placeholder="Name"
        required
        minLength={3}
        maxLength={30}
        inputMode="text"
      />
      <Input data-testid="name_XX" id="name_XX" />
    </>,
  )

  expect(screen.getByTestId('name')).toHaveStyle(
    `border-color: ${colors.darkBlue}`,
  )
  userEvent.tab()

  userEvent.type(screen.getByTestId('name'), 'sad123')

  document.getElementById('name_XX').focus()

  expect(screen.getByTestId('name'))
    .toHaveStyle(`border-color: ${colors.burgundyRed}
`)
})

test('should Input onBlur success: accept only text', () => {
  render(
    <>
      <Input
        data-testid="name"
        id="name"
        type="text"
        name="name"
        pattern="[^\(\)0-9]*"
        placeholder="Name"
        required
        minLength={3}
        maxLength={30}
        inputMode="text"
      />
      <Input data-testid="name_XX" id="name_XX" />
    </>,
  )
  expect(screen.getByTestId('name')).toHaveStyle(
    `border-color: ${colors.darkBlue}`,
  )
  userEvent.tab()
  userEvent.type(screen.getByTestId('name'), 'aasd')
  document.getElementById('name_XX').focus()

  expect(screen.getByTestId('name'))
    .toHaveStyle(`border-color: ${colors.lightGreen}
  `)
})
