import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {useClientFetch} from '../Utils/apis'
import Layout from '../components/Layout'
import ErrorMessageFallback from '../components/ErrorMessageFallback'
import Tags from '../components/Tags/Tags'

import type {Tag} from '../../types/tagsTypes'

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
