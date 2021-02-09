import React from 'react'

import {useClientFetch} from '../Utils/apis'
import Layout from '../components/Layout'
import Tags from '../components/Tags/Tags'

import type {Tag} from '../../types/interfaces'

function TagsControl() {
  const tagsData = useClientFetch('tags') as Array<Tag>

  return (
    <Layout>
      <Tags tagsData={tagsData} />
    </Layout>
  )
}
export default TagsControl
