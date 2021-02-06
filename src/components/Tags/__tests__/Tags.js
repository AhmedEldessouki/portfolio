import React from 'react'
import { screen } from '@testing-library/react'

import { render, userEvent } from '../../../test/app-test-utils'
import { buildTag } from '../../../test/generate'
import Tags from '../Tags'
import { tags } from '../../../test/data/tags'

const newTag = buildTag()

test('Tag Form', async () => {
  await render(<Tags tagsData={tags} />, {
    user: null,
    doWait: false,
  })

  expect(screen.getByLabelText('name')).toBeInTheDocument()
  expect(screen.getByLabelText(/url/i)).toBeInTheDocument()

  userEvent.type(screen.getByLabelText('name'), newTag.name)
  userEvent.type(screen.getByLabelText(/url/i), newTag.url)

  expect(screen.getByLabelText('name')).toHaveDisplayValue(newTag.name)
  expect(screen.getByLabelText(/url/i)).toHaveDisplayValue(newTag.url)

  expect(screen.getByRole('button', { name: /create tag/i })).toHaveAttribute(
    'type',
    'submit',
  )
})
