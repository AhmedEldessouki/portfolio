import * as React from 'react'
import {render} from '../utils/utils'
import {screen} from '@testing-library/react'
import About from '../components/Home/About/About'

test('App Rendered', () => {
  render(<About />)

  expect(screen.getByAltText(/profilePicture/i)).toBeInTheDocument()
  expect(screen.getAllByText(/Ahmed eldessouki/i)).toBeTruthy()
  expect(screen.getByRole('link')).toHaveTextContent(/github/i)
})
