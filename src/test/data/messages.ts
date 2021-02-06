import type {Message} from '../../components/Utils/interfaces'

const messages: Array<Message> = []

function create(message: Message) {
  messages.push(message)
  return message
}

function remove(message: Message) {
  const i = messages.findIndex(msg => msg.name === message.name)
  messages.splice(i, 1)
}

export {create, remove}
