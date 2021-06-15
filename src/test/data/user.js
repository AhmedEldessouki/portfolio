/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/no-unused-vars */
const usersKey = '__portfolio_user__'

// eslint-disable-next-line prefer-const
let users = {}
const persist = () =>
  window.localStorage.setItem(usersKey, JSON.stringify(users))
const load = () =>
  Object.assign(users, JSON.parse(window.localStorage.getItem(usersKey)))

// initialize
try {
  load()
} catch (error) {
  persist()
  // ignore json parse error
}

function hash(str) {
  let hashIt = 5381
  let i = str.length

  while (i) {
    hashIt = (hashIt * 33) ^ str.charCodeAt(--i)
  }
  return String(hashIt >>> 0)
}

function validateUserForm({username, password}) {
  if (!username) {
    const error = new Error('A username is required')
    error.status = 400
    throw error
  }
  if (!password) {
    const error = new Error('A password is required')
    error.status = 400
    throw error
  }
}

function sanitizeUser(user) {
  const {passwordHash, ...rest} = user
  return rest
}

function validateUser(id) {
  load()
  if (!users[id]) {
    const error = new Error(`No user with the id "${id}"`)
    error.status = 404
    throw error
  }
}

function authenticate({username, password}) {
  validateUserForm({username, password})
  const id = hash(username)
  const user = users[id] || {}
  if (user.passwordHash === hash(password)) {
    return {...sanitizeUser(user), token: btoa(user.id)}
  }
  const error = new Error('Invalid username or password')
  error.status = 400
  throw error
}
function read(id) {
  validateUser(id)
  return sanitizeUser(users[id])
}
function create({username, password}) {
  validateUserForm({username, password})
  const id = hash(username)
  const passwordHash = hash(password)
  if (users[id]) {
    const error = new Error(
      `Cannot create a new user with the username "${username}"`,
    )
    error.status = 400
    throw error
  }
  users[id] = {id, username, passwordHash}
  persist()
  return read(id)
}

export {authenticate, create, usersKey}
