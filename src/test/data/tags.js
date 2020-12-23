let tags = []

async function create(tag) {
  tags.push(tag)
  return tag
}

async function update(tag) {
  const i = tags.findIndex(tg => tg.id === tag.id)
  tags.splice(i, 1, tag)
  return tag
}

async function remove(tag) {
  const i = tags.findIndex(tg => tg.name === tag.name)
  delete tags[i]
}

export {create, update, remove}
