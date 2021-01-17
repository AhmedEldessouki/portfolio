import type {Message} from '../../components/Utils/interfaces'

let messages: Array<Message> = []

async function create(message: Message) {
  messages.push(message)
  return message
}

async function remove(message: Message) {
  const i = messages.findIndex(msg => msg.name === message.name)
  delete messages[i]
}

export {create, remove}
