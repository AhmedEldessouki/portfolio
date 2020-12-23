let messages = []

async function create(message) {
  messages.push(message)
  return message
}

async function remove(message) {
  const i = messages.findIndex(msg => msg.name === message.name)
  delete messages[i]
}

export {create, remove}
