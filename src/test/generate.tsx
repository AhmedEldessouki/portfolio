import faker from 'faker'
import type {User} from '@firebase/auth-types/index'
import type {Message, NewUser, Project} from '../../types/interfaces'
import type {Tag} from '../../types/tagsTypes'

function buildUser(overrides?: Partial<NewUser>) {
  return {
    uid: faker.random.uuid(),
    token: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    ...overrides,
  }
}
function buildUserLogin(overrides?: Partial<User>) {
  return {
    uid: faker.random.uuid(),
    token: faker.random.uuid(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.phoneNumberFormat().replace(/[^0-9]/gi, ''),
    photoURL: faker.image.avatar(),
    providerId: null,
    ...overrides,
  }
}

function buildProject(overrides?: Partial<Project>) {
  return {
    id: faker.random.uuid(),
    description: faker.lorem.paragraph(),
    link: faker.internet.url(),
    repoLink: faker.internet.url(),
    imageFiles: [faker.image.image(), faker.image.image(), faker.image.image()],
    projectLogo: [faker.image.imageUrl(), faker.image.imageUrl()],
    tag: [faker.image.imageUrl(), faker.image.imageUrl()],
    name: faker.name.firstName(),
    projectType: `Personal`,
    date: faker.date.past(),
    ...overrides,
  }
}

function buildMessage(overrides?: Partial<Message>) {
  return {
    id: faker.random.uuid(),
    email: faker.internet.email(),
    name: faker.name.firstName(),
    phoneNumber: faker.phone.phoneNumberFormat().replace(/[^0-9]/gi, ''),
    // date: faker.date.past(),
    description: faker.lorem.paragraph(),
    ...overrides,
  }
}

function buildTag(overrides?: Partial<Tag>) {
  return {
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    url: faker.image.imageUrl(),
    ...overrides,
  }
}
export {buildUser, buildUserLogin, buildMessage, buildProject, buildTag}
