import {render} from '@testing-library/react'
import React from 'react'
import {screen, userEvent} from '../../../test/app-test-utils'
import Input from '../Input'

test('should Input onChange', () => {
  const handleChange = jest.fn(e => e.target.value)
  render(<Input data-testid="name" type="text" onChange={handleChange} />)

  expect(handleChange).toBeCalledTimes(0)

  userEvent.type(screen.getByTestId('name'), 'asdasd')
  expect(handleChange).toBeCalledTimes(6)
  //   expect(handleChange).toHaveReturned('asdasd')
})
