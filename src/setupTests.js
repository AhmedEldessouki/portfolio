import '@testing-library/jest-dom/extend-expect'
import * as firebaseMocks from 'firebase-mock'
// import {firebaseApp, auth, db} from './components/Utils/firebase'
import {buildUser} from './test/generate'
import {server} from './test/server'
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock

beforeAll(() => server.listen())
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// const mockFirebase = jest.mock('./src/components/Utils/firebase', () => {
//   return mockFirebase
// })

// mockFirebase.database().flush()
// data is logged
var mockauth = new firebaseMocks.MockAuthentication()
var mockdatabase = new firebaseMocks.MockFirebase()
var mockfirestore = new firebaseMocks.MockFirestore()
var mockstorage = new firebaseMocks.MockStorage()
var mockmessaging = new firebaseMocks.MockMessaging()
var mocksdk = new firebaseMocks.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => {
    return path ? mockdatabase.child(path) : mockdatabase
  },
  // use null if your code does not use AUTHENTICATION
  () => {
    return mockauth
  },
  // use null if your code does not use FIRESTORE
  () => {
    return mockfirestore.collection(['projects', 'contactMe', 'tags'])
  },
  // use null if your code does not use STORAGE
  () => {
    return null
  },
  // use null if your code does not use MESSAGING
  () => {
    return null
  },
)
const user = buildUser()
jest.mock('./components/Utils/firebase', () => {
  return jest.fn().mockImplementation(() => {
    return {
      firebaseApp: mocksdk,
      auth: mockauth,
      db: mockfirestore,
    }
  })
})
