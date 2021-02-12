import React from 'react'

import {useClientFetch} from '../Utils/apis'
import Tags from '../components/Tags/Tags'

import type {Tag} from '../../types/interfaces'

function TagsControl() {
  const tagsData = useClientFetch('tags') as Array<Tag>

  return <Tags tagsData={tagsData} />
}
export default TagsControl
