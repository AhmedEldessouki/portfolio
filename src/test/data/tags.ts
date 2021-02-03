import type {Tag} from '../../components/Tags/tagsTypes'
import { tagsMockData } from './tags-data'

let tags: Array<Tag> = tagsMockData

async function create(tag: Tag) {
  tags.push(tag)
  return tag
}

async function update(tag: Tag) {
  const i = tags.findIndex(tg => tg.id === tag.id)
  tags.splice(i, 1, tag)
  return tag
}

async function remove(tag: Tag) {
  const i = tags.findIndex(tg => tg.name === tag.name)
  delete tags[i]
}

export {create, update, remove, tags}
