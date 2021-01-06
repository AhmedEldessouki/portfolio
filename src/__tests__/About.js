import * as React from 'react'
import {screen} from '@testing-library/react'
import About from '../components/Home/About/About'
import {render} from '../test/app-test-utils'

test('App Rendered', () => {
  render(<About />, {user: null})

  expect(screen.getByAltText(/profilePicture/i)).toBeInTheDocument()
  expect(screen.getAllByText(/Ahmed eldessouki/i)).toBeTruthy()
  expect(screen.getByRole('link')).toHaveTextContent(/github/i)
})
