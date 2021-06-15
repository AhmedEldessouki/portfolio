import {render} from '@testing-library/react'
import React from 'react'
import {screen, userEvent} from '../test/app-test-utils'
import Input from '../components/Input'

// test('should Input onBlur Error: accept only text', () => {
//   render(
//     <>
//       <Input
//         data-testid="name"
//         id="name"
//         type="text"
//         name="name"
//         pattern="/[a-z]/ig"
//         placeholder="Name"
//         required
//         minLength={3}
//         maxLength={30}
//         inputMode="text"
//       />
//       <Input data-testid="name_XX" id="name_XX" />
//     </>,
//   )

//   expect(screen.getByTestId('name')).toHaveStyle(
//     `border-image-source: linear-gradient(to right top, #6572a9, #6873ad)`,
//   )
//   // userEvent.tab()

//   document.getElementById('name').focus()
//   userEvent.type(screen.getByTestId('name'), 'sa')

//   expect(screen.getByTestId('name'))
//     .toHaveStyle(`border-image-source: linear-gradient(to right,#9f1919,#890620);`)
// })

test('should test Input valid state', () => {
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
    `border-image-source: linear-gradient(to right top, #6572a9, #6873ad)`,
  )
  userEvent.tab()
  userEvent.type(screen.getByTestId('name'), 'aasd')
  document.getElementById('name_XX').focus()

  expect(screen.getByTestId('name')).toHaveStyle(
    `border-image-source: linear-gradient(to right, #1CA195, #1BBC9B);`,
  )
})
