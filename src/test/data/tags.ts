import type {Tag} from '../../components/Tags/tagsTypes'
import {tagsMockData} from './tags-data'

const tags: Array<Tag> = tagsMockData

function create(tag: Tag) {
  tags.push(tag)
  return tag
}

function update(tag: Tag) {
  const i = tags.findIndex(tg => tg.id === tag.id)
  tags.splice(i, 1, tag)
  return tag
}

function remove(tag: Tag) {
  const i = tags.findIndex(tg => tg.name === tag.name)
  tags.splice(i, 1)
}

export {create, update, remove, tags}
