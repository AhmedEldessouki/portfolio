import faker from 'faker'

function buildUser(overrides) {
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
function buildUserLogin(overrides) {
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

function buildProject(overrides) {
  return {
    id: faker.random.uuid(),
    description: faker.lorem.paragraph(),
    link: faker.internet.url(),
    repoLink: faker.internet.url(),
    imagesFiles: [
      faker.image.image(),
      faker.image.image(),
      faker.image.image(),
    ],
    projectLogo: [faker.image.imageUrl(), faker.image.imageUrl()],
    tag: [faker.image.imageUrl(), faker.image.imageUrl()],
    name: faker.name.firstName(),
    date: faker.date.past(),
    ...overrides,
  }
}

function buildMessage(overrides = {}) {
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

function buildTag(overrides = {}) {
  return {
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    url: faker.image.imageUrl(),
    ...overrides,
  }
}
export {buildUser, buildUserLogin, buildMessage, buildProject, buildTag}
