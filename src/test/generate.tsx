import faker from 'faker'
import type {User} from '@firebase/auth-types/index'
import type {
  Message as MessageInterface,
  NewUser as NewUserInterface,
  ProjectInterface,
  Tag as TagInterface,
} from '../../types/interfaces'

function buildUser(overrides?: Partial<NewUserInterface>) {
  return {
    uid: faker.datatype.uuid(),
    token: faker.datatype.uuid(),
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
    uid: faker.datatype.uuid(),
    token: faker.datatype.uuid(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.phoneNumberFormat().replace(/[^0-9]/gi, ''),
    photoURL: faker.image.avatar(),
    providerId: null,
    ...overrides,
  }
}

function buildProject(overrides?: Partial<ProjectInterface>) {
  return {
    id: faker.datatype.uuid(),
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

function buildMessage(overrides?: Partial<MessageInterface>) {
  return {
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    name: faker.name.firstName(),
    phoneNumber: faker.phone.phoneNumberFormat().replace(/[^0-9]/gi, ''),
    // date: faker.date.past(),
    description: faker.lorem.paragraph(),
    ...overrides,
  }
}

function buildTag(overrides?: Partial<TagInterface>) {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    url: faker.image.imageUrl(),
    ...overrides,
  }
}
export {buildUser, buildUserLogin, buildMessage, buildProject, buildTag}
