import * as React from 'react'
import userEvent from '@testing-library/user-event'
import {screen} from '@testing-library/react'

import {render} from '../test/app-test-utils'
import {buildTag} from '../test/generate'
import Tags from '../components/Tags/Tags'

test('Tag Render', async () => {
  render(<Tags tagsData={[buildTag(), buildTag()]} />)

  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/link/i)).toBeInTheDocument()

  expect(screen.getByRole('button')).toBeInTheDocument()
})
