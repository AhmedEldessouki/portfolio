import '@testing-library/jest-dom/extend-expect'
import * as firebaseMocks from 'firebase-mock'
import {server} from './test/server/test-server'

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
var mockAuth = new firebaseMocks.MockAuthentication()
var mockFirestoreCloudDB = new firebaseMocks.MockFirestore()
var mockFirebaseSDK = new firebaseMocks.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => {
    return null
  },
  // use null if your code does not use AUTHENTICATION
  () => {
    return mockAuth
  },
  // use null if your code does not use FIRESTORE
  () => {
    const firestore = () =>
      jest.fn().mockReturnValue({
        collection: jest.fn().mockReturnValue({
          doc: jest.fn().mockReturnValue({
            add: jest.fn().mockResolvedValue({
              id: 'abc123',
              name: 'xxxx',
            }),
            get: jest.fn().mockResolvedValue({
              id: 'abc123',
              name: 'xxxx',
            }),
            set: jest.fn().mockResolvedValue({
              uid: 'abc123',
            }),
          }),
        }),
      })
    return firestore
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
jest.mock('./components/Utils/firebase', () => {
  return jest.fn().mockImplementation(() => {
    return {
      firebaseApp: mockFirebaseSDK,
      auth: mockAuth,
      db: mockFirestoreCloudDB,
    }
  })
})
