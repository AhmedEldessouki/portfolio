import faker from 'faker'

function buildUser(overrides) {
  return {
    uid: faker.random.uuid(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides,
  }
}
function buildUserLogin(overrides) {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides,
  }
}

function buildProject(overrides) {
  return {
    id: faker.random.uuid(),
    description: faker.lorem.paragraph(),
    link: faker.internet.url(),
    projectLogo: [faker.image.imageUrl(), faker.image.imageUrl()],
    tag: [faker.image.imageUrl(), faker.image.imageUrl()],
    name: faker.company.companyName(),
    date: faker.date.past(),
    ...overrides,
  }
}

function buildMessage(overrides = {}) {
  return {
    id: faker.random.uuid(),
    email: faker.internet.email(),
    name: faker.company.companyName(),
    phoneNumber: faker.phone.phoneNumber(),
    date: faker.date.past(),
    description: faker.lorem.paragraph(),
    ...overrides,
  }
}

function buildTag(overrides = {}) {
  return {
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    url: faker.image.imageUrl(),
    ...overrides,
  }
}
export {buildUser, buildUserLogin, buildMessage, buildProject, buildTag}
