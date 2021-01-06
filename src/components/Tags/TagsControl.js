import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {useClientFetch} from '../Utils/apis'
import Layout from '../Layout'
import {ErrorMessageFallback} from '../Utils/util'
import Tags from './Tags'

function TagsControl() {
  const TagsData = useClientFetch({collection: 'tags'})

  return (
    <Layout>
      <ErrorBoundary
        resetKeys={[TagsData]}
        fallbackComponent={ErrorMessageFallback}
      >
        <Tags TagsData={TagsData} />
      </ErrorBoundary>
    </Layout>
  )
}
export default TagsControl
