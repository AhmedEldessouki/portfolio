import React from 'react'
import {screen} from '@testing-library/react'
import About from '../components/About/About'
import {render} from '../test/app-test-utils'

test('App Rendered', async () => {
  await render(<About />, {user: null, doWait: false})

  expect(screen.getByAltText(/profile Picture/i)).toBeInTheDocument()
  expect(screen.getAllByText(/Ahmed eldessouki/i)).toHaveLength(2)
  expect(screen.getByRole('link')).toHaveTextContent(/github/i)
})
