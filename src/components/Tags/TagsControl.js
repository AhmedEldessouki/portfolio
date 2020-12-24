import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {useClientFetch} from '../../utils/apis'
import {ErrorMessage} from '../Utils/util'
import Tags from './Tags'

function TagsControl() {
  const TagsData = useClientFetch({collection: 'tags'})

  return (
    <ErrorBoundary resetKeys={[TagsData]} fallback={<ErrorMessage />}>
      <Tags TagsData={TagsData} />
    </ErrorBoundary>
  )
}
export default TagsControl
