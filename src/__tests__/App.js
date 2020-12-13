import * as React from 'react'
import {screen, waitForElementToBeRemoved} from '@testing-library/react'

import App from '../App'
import {render} from '../utils/utils'

describe('Portfolio', () => {
  beforeEach(() => {
    waitForElementToBeRemoved(() => screen.queryByText('loading...'))
  })
  test('App Rendered', () => {
    render(<App />)
  })
})
