import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {useClientFetch} from '../Utils/apis'
import Layout from '../Layout'
import {ErrorMessageFallback} from '../Utils/util'
import Tags from './Tags'

import type {Tag} from './tagsTypes'

function TagsControl() {
  const TagsData = useClientFetch('tags') as Array<Tag>

  return (
    <Layout>
      <ErrorBoundary
        resetKeys={[TagsData]}
        FallbackComponent={ErrorMessageFallback}
      >
        <Tags TagsData={TagsData} />
      </ErrorBoundary>
    </Layout>
  )
}
export default TagsControl
